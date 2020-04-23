<?php
namespace MatthiasWeb\RealMediaLibrary;

use MatthiasWeb\RealMediaLibrary\base\UtilsProvider;
use MatthiasWeb\Utils\Activator as UtilsActivator;

// @codeCoverageIgnoreStart
defined('ABSPATH') or die('No script kiddies please!'); // Avoid direct file request
// @codeCoverageIgnoreEnd

/**
 * The activator class handles the plugin relevant activation hooks: Uninstall, activation,
 * deactivation and installation. The "installation" means installing needed database tables.
 */
class Activator {
    use UtilsProvider;
    use UtilsActivator;

    const DB_CHILD_QUERY_SUPPORTED = '_cqs';

    const CHILD_UDF_NAME = 'fn_realmedialibrary_childs';

    private $childSupportCurrentType = null;

    /**
     * Method gets fired when the user activates the plugin.
     */
    public function activate() {
        /**
         * This hook is fired when RML gets activated.
         *
         * @hook RML/Activate
         */
        do_action('RML/Activate');
    }

    /**
     * Method gets fired when the user deactivates the plugin.
     */
    public function deactivate() {
        // Your implementation...
    }

    /**
     * Install tables, stored procedures or whatever in the database.
     * This method is always called when the version bumps up or for
     * the first initial activation.
     *
     * @param boolean $errorlevel If true throw errors
     */
    public function dbDelta($errorlevel) {
        global $wpdb;
        $charset_collate = $wpdb->get_charset_collate();

        $this->supportsChildQuery(true);

        /**
         * Indexes have a maximum size of 767 bytes. Historically, we haven't need to be concerned about that.
         * As of 4.2, however, we moved to utf8mb4, which uses 4 bytes per character. This means that an index which
         * used to have room for floor(767/3) = 255 characters, now only has room for floor(767/4) = 191 characters.
         *
         * @see wp-admin/includes/schema.php#52
         * @internal
         */
        $max_index_length = 191;

        // wp_realmedialibrary
        $table_name = $this->getTableName();
        $sql = "CREATE TABLE $table_name (
            id mediumint(9) NOT NULL AUTO_INCREMENT,
            parent mediumint(9) DEFAULT '-1' NOT NULL,
            name tinytext NOT NULL,
            slug text DEFAULT '' NOT NULL,
            absolute text DEFAULT '' NOT NULL,
            owner bigint(20) NOT NULL,
            ord mediumint(10) DEFAULT 0 NOT NULL,
            oldCustomOrder mediumint(10) DEFAULT NULL,
            contentCustomOrder tinyint(1) DEFAULT 0 NOT NULL,
            type varchar(10) DEFAULT '0' NOT NULL,
            restrictions varchar(255) DEFAULT '' NOT NULL,
            cnt mediumint(10) DEFAULT NULL,
            importId bigint(20) DEFAULT NULL,
            UNIQUE KEY id (id)
        ) $charset_collate;";
        dbDelta($sql);

        if ($errorlevel) {
            $wpdb->print_error();
        }

        // Table wp_realmedialibrary_posts
        $table_name = $this->getTableName('posts');
        $sql = "CREATE TABLE $table_name (
            attachment bigint(20) NOT NULL,
            fid mediumint(9) NOT NULL DEFAULT '-1',
            isShortcut bigint(20) NOT NULL DEFAULT 0,
            nr bigint(20),
            oldCustomNr bigint(20) DEFAULT NULL,
            importData text,
            KEY rmljoin (attachment,fid),
            UNIQUE KEY rmlorder (attachment,isShortcut)
        ) $charset_collate;";
        dbDelta($sql);

        // Table wp_realmedialibrary_meta
        $table_name = $this->getTableName('meta');
        $sql = "CREATE TABLE $table_name (
          `meta_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
          `realmedialibrary_id` bigint(20) unsigned NOT NULL DEFAULT '0',
          `meta_key` varchar(255) DEFAULT NULL,
          `meta_value` longtext,
          PRIMARY KEY  (meta_id),
          KEY realmedialibrary_id (realmedialibrary_id),
          KEY meta_key (meta_key($max_index_length))
        ) $charset_collate;";
        dbDelta($sql);

        if ($errorlevel) {
            $wpdb->print_error();
        }
    }

    /**
     * Create a MySQL function wp_realmedialibrary_childs to read recursively
     * children of a folder.
     */
    public function createChildQueryFunction() {
        global $wpdb;
        $function_name = $wpdb->prefix . self::CHILD_UDF_NAME;
        $table_name = $this->getTableName();
        // phpcs:disable WordPress.DB.PreparedSQL
        $wpdb->query("DROP FUNCTION IF EXISTS $function_name");
        // phpcs:enable WordPress.DB.PreparedSQL
        $sql =
            "CREATE FUNCTION $function_name(rootId INT, _useTempChildTableForCheck BOOLEAN) RETURNS varchar(1000) SQL SECURITY INVOKER BEGIN
        	DECLARE sTemp VARCHAR(1000);
        	DECLARE sTempChd VARCHAR(1000);
        	SET sTemp = '$';
        	SET sTempChd = CAST(rootId AS CHAR);
		    SET SESSION group_concat_max_len = 100000;
        	WHILE sTempChd IS NOT NULL DO
        		SET sTemp = CONCAT(sTemp,',',sTempChd);
        		IF _useTempChildTableForCheck IS NULL OR _useTempChildTableForCheck = false THEN
        		    SELECT GROUP_CONCAT(id) INTO sTempChd FROM $table_name WHERE FIND_IN_SET(parent,sTempChd) > 0;
        		ELSE
        		    SELECT GROUP_CONCAT(id) INTO sTempChd FROM " .
            $this->getTableName('tmp') .
            ' WHERE FIND_IN_SET(parent,sTempChd) > 0;
        		END IF;
        	END WHILE;
        	RETURN sTemp;
        END';
        // phpcs:disable WordPress.DB.PreparedSQL
        $wpdb->query($sql);
        // phpcs:enable WordPress.DB.PreparedSQL
    }

    /**
     * Checks if the current database supports functions or recursive drill-down query.
     *
     * @param boolean $force
     * @param string $type Can be 'legacy' or 'function'.
     * @see wp_rml_all_children_sql_supported
     * @return boolean
     */
    public function supportsChildQuery($force = false, $type = 'legacy') {
        global $wpdb;
        $value = get_site_option(RML_OPT_PREFIX . self::DB_CHILD_QUERY_SUPPORTED, null);
        $function_exists = $this->checkDirtyFunction($wpdb->prefix . self::CHILD_UDF_NAME);

        // The function does not exist but the option says, that it is supported -> force
        if (!$function_exists && ($value === '2' || $force)) {
            $this->debug(
                'The database function does not exist but the option says, it is supported... force recreation',
                __METHOD__
            );
            $this->install(false, [$this, 'createChildQueryFunction']);
            $force = true;
        }

        if ($value === null || $force) {
            $this->childSupportCurrentType = 'function';
            $this->install(false, [$this, 'checkChildQuery']);
            $value = get_site_option(RML_OPT_PREFIX . self::DB_CHILD_QUERY_SUPPORTED, null);

            if ($type === 'function') {
                return $value > 0;
            }

            // Fallback to the legacy
            if ($value === '0') {
                $this->childSupportCurrentType = 'legacy';
                $this->install(false, [$this, 'checkChildQuery']);
                $value = get_site_option(RML_OPT_PREFIX . self::DB_CHILD_QUERY_SUPPORTED, null);
            }
        }

        if ($type === 'function') {
            return $value === '2';
        }

        return $value > 0;
    }

    /**
     * Check if the current instance type works as expected.
     */
    public function checkChildQuery() {
        // phpcs:disable WordPress.DB.PreparedSQL
        global $wpdb;
        $charset_collate = $wpdb->get_charset_collate();
        $table_name = $this->getTableName('tmp');

        // Main table
        $sql = "CREATE TABLE $table_name (
			id mediumint(9) NOT NULL AUTO_INCREMENT,
			parent mediumint(9) DEFAULT '-1' NOT NULL,
			name tinytext NOT NULL,
			ord mediumint(10) DEFAULT 0 NOT NULL,
			UNIQUE KEY id (id)
		) $charset_collate;";
        dbDelta($sql);

        $wpdb->query('DELETE FROM ' . $table_name);

        // Create hierarchy
        $wpdb->query('INSERT INTO ' . $table_name . ' VALUES(NULL, -1, "Root", 0)');
        $wpdb->query(
            'INSERT INTO ' . $table_name . ' VALUES(NULL, ' . $wpdb->insert_id . ', "Roots 1st child (Bob)", 0)'
        );
        $bob = $wpdb->insert_id;
        $wpdb->query('INSERT INTO ' . $table_name . ' VALUES(NULL, ' . $bob . ', "Bobs 1st child", 0)');
        $wpdb->query('INSERT INTO ' . $table_name . ' VALUES(NULL, ' . $bob . ', "Bobs 2nd child (Marie)", 1)');
        $wpdb->query('INSERT INTO ' . $table_name . ' VALUES(NULL, ' . $wpdb->insert_id . ', "Maries 1st child", 0)');

        // Check query result
        $sql = Util::getInstance()->createSQLForAllChildren($bob, true, null, $this->childSupportCurrentType);
        $sql = str_replace($this->getTableName(), $table_name, $sql);
        $supported = count($wpdb->get_results($sql)) === 4;
        $onSuccess = $this->childSupportCurrentType === 'function' ? '2' : '1';
        $option_value = $supported ? $onSuccess : '0';
        update_site_option(RML_OPT_PREFIX . self::DB_CHILD_QUERY_SUPPORTED, $option_value);

        $this->debug(
            'Your system supports recursive child SQL queries: ' . $this->childSupportCurrentType . '=' . $option_value,
            __METHOD__
        );
        $wpdb->query('DROP TABLE ' . $table_name);
        // phpcs:enable WordPress.DB.PreparedSQL
    }

    /**
     * Checks if the Database supports functions but the function is not yet created (due to exports for example).
     *
     * @param string $function_name
     * @return boolean
     */
    public function checkDirtyFunction($function_name) {
        global $wpdb;
        return $wpdb->get_var(
            $wpdb->prepare(
                'SELECT COUNT(*) FROM INFORMATION_SCHEMA.ROUTINES WHERE ROUTINE_TYPE="FUNCTION" AND ROUTINE_SCHEMA=%s AND ROUTINE_NAME=%s',
                $wpdb->dbname,
                $function_name
            )
        ) > 0;
    }
}
