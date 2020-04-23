<?php
namespace MatthiasWeb\RealMediaLibrary;

use DevOwl\Freemium\Assets as FreemiumAssets;
use MatthiasWeb\RealMediaLibrary\base\UtilsProvider;
use MatthiasWeb\RealMediaLibrary\comp\ExImport;
use MatthiasWeb\RealMediaLibrary\folder\Creatable;
use MatthiasWeb\RealMediaLibrary\order\Sortable;
use MatthiasWeb\RealMediaLibrary\view\Lang;
use MatthiasWeb\RealMediaLibrary\view\Options;
use MatthiasWeb\Utils\Assets as UtilsAssets;
use WP_Post;

// @codeCoverageIgnoreStart
defined('ABSPATH') or die('No script kiddies please!'); // Avoid direct file request
// @codeCoverageIgnoreEnd

/**
 * Asset management for frontend scripts and styles.
 */
class Assets {
    use UtilsProvider;
    use UtilsAssets;
    use FreemiumAssets;

    /**
     * Enqueue gutenberg specific files.
     */
    public function enqueue_block_editor_assets() {
        $this->enqueuePolyfills();
        $this->enqueueScript(
            RML_SLUG . '-gutenberg',
            [[$this->isPro(), 'rml_gutenberg.pro.js'], 'rml_gutenberg.lite.js'],
            ['wp-blocks', 'wp-i18n', 'wp-element', 'es6-shim', 'es7-shim']
        );
    }

    /**
     * Enqueue ES6 and ES7 shims.
     *
     * Due to LEGACY purposes the usual way by core-js built-ins is not used. Also, antd is
     * not yet compatible with core-js@3 + plugin-transform-runtime disables helpers.
     */
    private function enqueuePolyfills() {
        $this->enqueueLibraryScript('es6-shim', 'es6-shim/es6-shim.min.js');
        $this->enqueueLibraryScript('es7-shim', 'es7-shim/dist/es7-shim.min.js', ['es6-shim']);
    }

    /**
     * Enqueue scripts and styles depending on the type. This function is called
     * from both admin_enqueue_scripts and wp_enqueue_scripts. You can check the
     * type through the $type parameter. In this function you can include your
     * external libraries from src/public/lib, too.
     *
     * Due to LEGACY transformation the devowl-wp-utils package was removed from package.json.
     *
     * @param string $type The type (see utils Assets constants)
     */
    public function enqueue_scripts_and_styles($type) {
        /**
         * Checks if assets for RML should be skipped. This can be useful in
         * combination with page builders.
         *
         * @param {boolean} $skip True for skip and false for load
         * @param {string} $type The context type
         * @return {boolean}
         * @hook RML/Scripts/Skip
         * @since 4.5.2
         */
        $skip = apply_filters('RML/Scripts/Skip', false, $type);

        if (!wp_rml_active() || $skip) {
            return;
        }

        // Generally check if an entrypoint should be loaded
        if (!in_array($type, [self::$TYPE_ADMIN], true) && !Options::load_frontend()) {
            return;
        }

        // Your assets implementation here... See utils Assets for enqueue* methods
        // $useNonMinifiedSources = $this->useNonMinifiedSources(); // Use this variable if you need to differ between minified or non minified sources
        // Our utils package relies on jQuery, but this shouldn't be a problem as the most themes still use jQuery (might be replaced with https://github.com/github/fetch)
        $scriptDeps = [
            self::$HANDLE_REACT,
            self::$HANDLE_REACT_DOM,
            self::$HANDLE_MOBX,
            'moment',
            'wp-i18n',
            'es6-shim',
            'es7-shim',
            'i18n-react',
            'react-aiot.vendor',
            'react-aiot',
            'jquery'
        ];
        $useNonMinifiedSources = $this->useNonMinifiedSources();

        // Enqueue external utils package (not needed, yet)
        // $handleUtils = $this->enqueueComposerScript('utils', $scriptDeps);
        // array_push($scriptDeps, $handleUtils);

        // Enqueue plugin entry points
        if ($type === self::$TYPE_ADMIN || Options::load_frontend()) {
            // jQuery scripts (Helper) core.js, widget.js, mouse.js, draggable.js, droppable.js, sortable.js
            $requires = [
                'jquery',
                'jquery-ui-core',
                'jquery-ui-widget',
                'jquery-ui-mouse',
                'jquery-ui-draggable',
                'jquery-ui-droppable',
                'jquery-ui-sortable',
                'jquery-touch-punch'
            ];
            array_walk($requires, 'wp_enqueue_script');

            wp_enqueue_media(['post' => get_query_var('post-id', null)]);
            add_thickbox();
            wp_enqueue_script('wp-api');

            $this->enqueuePolyfills();
            $this->enqueueReact();
            $this->enqueueMobx();

            $this->enqueueLibraryScript(
                'i18n-react',
                [
                    [$useNonMinifiedSources, 'i18n-react/dist/i18n-react.umd.js'],
                    'i18n-react/dist/i18n-react.umd.min.js'
                ],
                [self::$HANDLE_REACT_DOM]
            );
            $this->enqueueLibraryScript(
                'mobx-state-tree',
                [
                    [$useNonMinifiedSources, 'mobx-state-tree/dist/mobx-state-tree.umd.js'],
                    'mobx-state-tree/dist/mobx-state-tree.umd.min.js'
                ],
                [self::$HANDLE_MOBX]
            );
            $this->enqueueLibraryScript('react-aiot.vendor', 'react-aiot/umd/react-aiot.vendor.umd.js', [
                self::$HANDLE_REACT_DOM
            ]);
            $this->enqueueLibraryScript('react-aiot', 'react-aiot/umd/react-aiot.umd.js', ['react-aiot.vendor']);

            $this->enqueueLibraryStyle('react-aiot.vendor', 'react-aiot/umd/react-aiot.vendor.umd.css');
            $this->enqueueLibraryStyle('react-aiot', 'react-aiot/umd/react-aiot.umd.css', ['react-aiot.vendor']);

            $handle = $this->enqueueScript('rml', [[$this->isPro(), 'rml.pro.js'], 'rml.lite.js'], $scriptDeps);
            $this->enqueueStyle('rml', 'rml.css');

            // Plugin icon font
            wp_enqueue_style('rml-font', plugins_url('public/others/icons/css/rml.css', RML_FILE), [], RML_VERSION);

            // Localize script with server-side variables (RML_SLUG_CAMELCASE can not be used in lite environment, use LEGACY rmlOpts)
            wp_localize_script($handle, RML_OPT_PREFIX . 'Opts', $this->localizeScript($type));

            /**
             * This action is fired when RML has enqueued scripts and styles.
             *
             * @param {Assets} $assets The assets instance
             * @hook RML/Scripts
             */
            do_action('RML/Scripts', $this);
        }
    }

    /**
     * Localize the WordPress backend and frontend. If you want to provide URLs to the
     * frontend you have to consider that some JS libraries do not support umlauts
     * in their URI builder. For this you can use utils Assets#getAsciiUrl.
     *
     * Also, if you want to use the options typed in your frontend you should
     * adjust the following file too: src/public/ts/store/option.tsx
     *
     * @param string $context
     * @return array
     */
    public function overrideLocalizeScript($context) {
        $mode = get_user_option('media_library_mode', get_current_user_id());
        $mode = $mode ? $mode : 'grid';
        $core = $this->getCore();
        $isLicenseActivated = $this->isPro() ? $core->getUpdater()->isActivated() : true;
        $isLicenseNoticeDismissed = $core->isLicenseNoticeDismissed();

        return apply_filters('RML/Localize', array_merge([
            'canManageOptions' => current_user_can('manage_options'),
            'lang' => (new Lang())->getItems($this),
            'childrenSql' => intval(get_site_option(RML_OPT_PREFIX . Activator::DB_CHILD_QUERY_SUPPORTED, null)),
            'lastQueried' => wp_rml_last_queried_folder(),
            'blogId' => get_current_blog_id(),
            'rootId' => _wp_rml_root(),
            'listMode' => $mode,
            'userSettings' => has_filter('RML/User/Settings/Content'),
            'sortables' => [
                'content' => Sortable::getAvailableContentOrders(true),
                'tree' => Creatable::getAvailableSubfolderOrders(true)
            ],
            'showLicenseNotice' =>
                !$isLicenseActivated && !$isLicenseNoticeDismissed && current_user_can('install_plugins'),
            'showTaxImportNotice' =>
                count(ExImport::getInstance()->getHierarchicalTaxos()) > 0 &&
                !ExImport::getInstance()->isImportTaxNoticeDismissed(),
            'taxImportNoticeLink' => admin_url('options-media.php#rml-rml_export_data'),
            'pluginsUrl' => admin_url('plugins.php')
        ], $this->localizeFreemiumScript()));
    }

    /**
     * Add an "Add-On" link to the plugin row links.
     *
     * @param string[] $links
     * @param string $file
     * @return string[]
     */
    public function plugin_row_meta($links, $file) {
        if (false !== strpos($file, plugin_basename(RML_FILE))) {
            $rateLink = $this->isPro()
                ? 'https://codecanyon.net/downloads#item-13155134'
                : 'https://wordpress.org/support/plugin/' . RML_SLUG_LITE . '/reviews/#new-post';
            $links[] =
                '<a target="_blank" href="https://devowl.io/wordpress-real-media-library/#complementary-plugins"><strong>' .
                __('Complementary Plugins', RML_TD) .
                '</strong></a>';
            $links[] =
                '<a target="_blank" href="https://devowl.io/support/"><strong><span class="dashicons dashicons-format-status"></span> ' .
                __('Support', RML_TD) .
                '</strong></a>';
            $links[] =
                '<a target="_blank" href="' .
                $rateLink .
                '"><strong><span class="dashicons dashicons-star-empty"></span> ' .
                __('Rate plugin', RML_TD) .
                '</strong></a>';
        }
        return $links;
    }

    /**
     * Modify the media view strings for a shortcut hint in the media grid view.
     * This function is also used to return the single string for the note when
     * $strings is false.
     *
     * 'warnDelete'
     * 'warnBulkDelete'
     *
     * @param string[] $strings
     * @return string[]
     */
    public function media_view_strings($strings) {
        $str = __(
            "\n\nNote: If you want to delete a shortcut file, the source file will NOT be deleted.\nIf you want to delete a non-shortcut file, all associated shortcuts are deleted, too.",
            RML_TD
        );
        if ($strings === false) {
            return $str;
        }

        if (isset($strings['warnDelete'])) {
            $strings['warnDelete'] .= $str;
        }
        if (isset($strings['warnBulkDelete'])) {
            $strings['warnBulkDelete'] .= $str;
        }
        return $strings;
    }

    /**
     * Modify the media view strings for a shortcut hint in the media table view.
     *
     * @param array $actions
     * @param WP_Post $post
     * @return array
     */
    public function media_row_actions($actions, $post) {
        if (isset($actions['delete'])) {
            $actions['delete'] = str_replace('showNotice.warn();', 'window.rmlWarnDelete();', $actions['delete']);
        }

        // Add a table mode "helper" to create the rml icon
        if (wp_attachment_is_shortcut($post)) {
            $actions['rmlShortcutSpan'] = '&nbsp;';
        }
        return $actions;
    }
}
