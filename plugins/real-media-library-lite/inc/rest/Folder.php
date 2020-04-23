<?php
namespace MatthiasWeb\RealMediaLibrary\rest;

use MatthiasWeb\RealMediaLibrary\attachment\Structure;
use MatthiasWeb\RealMediaLibrary\base\UtilsProvider;
use MatthiasWeb\RealMediaLibrary\exception\OnlyInProVersionException;
use MatthiasWeb\RealMediaLibrary\metadata\Meta;
use MatthiasWeb\RealMediaLibrary\rest\Service;
use WP_Error;
use WP_REST_Response;

// @codeCoverageIgnoreStart
defined('ABSPATH') or die('No script kiddies please!'); // Avoid direct file request
// @codeCoverageIgnoreEnd

/**
 * Enables the /folders REST for all creatable items.
 */
class Folder {
    use UtilsProvider;

    /**
     * Register endpoints.
     */
    public function rest_api_init() {
        register_rest_route(Service::LEGACY_NAMESPACE, '/folders/content/counts', [
            'methods' => 'GET',
            'callback' => [$this, 'getContentCounts']
        ]);

        if ($this->isPro()) {
            register_rest_route(Service::LEGACY_NAMESPACE, '/folders/(?P<fid>\d+)/content/sortables', [
                'methods' => 'POST',
                'callback' => [$this, 'applyContentSortables']
            ]);

            register_rest_route(Service::LEGACY_NAMESPACE, '/folders/(?P<fid>\d+)/sortables', [
                'methods' => 'POST',
                'callback' => [$this, 'applyFolderSortables']
            ]);
        }

        register_rest_route(Service::LEGACY_NAMESPACE, '/folders/(?P<id>\d+)/meta', [
            'methods' => 'GET',
            'callback' => [$this, 'getMetaHTML']
        ]);

        register_rest_route(Service::LEGACY_NAMESPACE, '/folders/(?P<id>\d+)/meta', [
            'methods' => 'PUT',
            'callback' => [$this, 'updateMeta']
        ]);

        register_rest_route(Service::LEGACY_NAMESPACE, '/folders/(?P<id>\d+)', [
            'methods' => 'PUT',
            'callback' => [$this, 'updateItem']
        ]);

        register_rest_route(Service::LEGACY_NAMESPACE, '/folders/(?P<id>\d+)', [
            'methods' => 'DELETE',
            'callback' => [$this, 'deleteItem']
        ]);

        register_rest_route(Service::LEGACY_NAMESPACE, '/folders', [
            'methods' => 'POST',
            'callback' => [$this, 'createItem']
        ]);
    }

    /**
     * See API docs.
     *
     * @param WP_REST_Request $request
     * @return WP_REST_Response|WP_Error
     *
     * @api {get} /realmedialibrary/v1/folders/content/counts Get all folder counts
     * @apiName GetFolderContentCounts
     * @apiGroup Folder
     * @apiVersion 1.0.0
     * @apiPermission upload_files
     */
    public function getContentCounts($request) {
        if (($permit = Service::permit()) !== null) {
            return $permit;
        }

        return new WP_REST_Response(Structure::getInstance()->getFolderCounts());
    }

    /**
     * See API docs.
     *
     * @param WP_REST_Request $request
     * @return WP_REST_Response|WP_Error
     *
     * @api {post} /realmedialibrary/v1/folders/:fid/content/sortables Set a folders content order
     * @apiParam {string} id The sortable id. Pass "original" to reset the folder,
     *  pass "deactivate" to deactive the automatic order,
     *  pass "reindex" to reindex the order indexes,
     *  pass "last" to try to to reset to the last available order
     * @apiParam {boolean} [automatically] Automatically use this order when new files are added to the folder
     * @apiName ApplyFolderContentSorting
     * @apiGroup Folder
     * @apiVersion 1.0.0
     * @apiPermission upload_files
     * @apiPermission Pro only
     * @since 4.4 The old API /folders/content/sortables is deleted
     */
    public function applyContentSortables($request) {
        if (($permit = Service::permit()) !== null) {
            return $permit;
        }

        $sortable = $request->get_param('id');
        $applyTo = $request->get_param('fid');
        $automatically = $request->get_param('automatically');
        $automatically = gettype($automatically) === 'string' ? $automatically === 'true' : $automatically;
        $folder = wp_rml_get_object_by_id($applyTo);
        $isFolder = is_rml_folder($folder);
        $result = false;
        if ($sortable === 'original') {
            $result = $isFolder && $folder->contentDeleteOrder();
        } elseif ($sortable === 'deactivate') {
            $result = update_media_folder_meta($folder->getId(), 'orderAutomatically', false);
        } elseif ($sortable === 'reindex') {
            $result = $isFolder && $folder->contentReindex();
        } elseif ($sortable === 'last') {
            $result = $isFolder && $folder->getContentOldCustomNrCount() > 0 && $folder->contentRestoreOldCustomNr();
        } else {
            $result = $isFolder && $folder->contentOrderBy($sortable);
            if ($result) {
                update_media_folder_meta($folder->getId(), 'orderAutomatically', $automatically);
            }
        }
        return new WP_REST_Response($result);
    }

    /**
     * See API docs.
     *
     * @param WP_REST_Request $request
     * @return WP_REST_Response|WP_Error
     *
     * @api {post} /realmedialibrary/v1/folders/:fid/sortables Set a folders subfolder order
     * @apiParam {string} id The sortable id. Pass "original" to reset the folder,
     *  pass "deactivate" to deactive the automatic order,
     *  pass "reindex" to reindex the order indexes,
     *  pass "last" to try to to reset to the last available order
     * @apiParam {boolean} [automatically] Automatically use this order when new subfolders are added to the folder
     * @apiName ApplyFolderSorting
     * @apiGroup Folder
     * @apiVersion 1.0.0
     * @apiPermission upload_files
     * @apiPermission Pro only
     * @since 4.4
     */
    public function applyFolderSortables($request) {
        if (($permit = Service::permit()) !== null) {
            return $permit;
        }

        $sortable = $request->get_param('id');
        $applyTo = $request->get_param('fid');
        $automatically = $request->get_param('automatically');
        $automatically = gettype($automatically) === 'string' ? $automatically === 'true' : $automatically;
        $folder = wp_rml_get_object_by_id($applyTo);
        $isFolder = is_rml_folder($folder);
        $result = false;
        if ($sortable === 'original') {
            $result = $isFolder && $folder->resetSubfolderOrder();
        } elseif ($sortable === 'deactivate') {
            $result = update_media_folder_meta($folder->getId(), 'subOrderAutomatically', false);
        } elseif ($sortable === 'reindex') {
            $result = $isFolder && $folder->reindexChildrens();
        } elseif ($sortable === 'last') {
            //$result = $isFolder && $folder->getContentOldCustomNrCount() > 0 && $folder->contentRestoreOldCustomNr();
        } else {
            $result = $isFolder && $folder->orderSubfolders($sortable);
            if ($result) {
                update_media_folder_meta($folder->getId(), 'subOrderAutomatically', $automatically);
            }
        }
        return new WP_REST_Response($result);
    }

    /**
     * See API docs.
     *
     * @param WP_REST_Request $request
     * @return WP_REST_Response|WP_Error
     *
     * @api {post} /realmedialibrary/v1/folders Create a new folder
     * @apiParam {string} name The new name for the folder
     * @apiParam {int} parent The parent
     * @apiParam {string} type The folder type
     * @apiName DeleteFolder
     * @apiGroup Folder
     * @apiVersion 1.0.0
     * @apiPermission upload_files
     */
    public function createItem($request) {
        if (($permit = Service::permit()) !== null) {
            return $permit;
        }

        $name = $request->get_param('name');
        $parent = $request->get_param('parent');
        $type = $request->get_param('type');

        try {
            $insert = wp_rml_create($name, $parent, $type);
        } catch (OnlyInProVersionException $e) {
            return new WP_Error('rest_rml_only_pro', $e->getMessage(), ['status' => 500]);
        }

        if (is_array($insert)) {
            return new WP_Error('rest_rml_folder_create_failed', implode(' ', $insert), ['status' => 500]);
        } else {
            return new WP_REST_Response(wp_rml_get_object_by_id($insert)->getPlain());
        }
    }

    /**
     * See API docs.
     *
     * @param WP_REST_Request $request
     * @return WP_REST_Response|WP_Error
     *
     * @api {delete} /realmedialibrary/v1/folders/:id Delete a folder by id
     * @apiName DeleteFolder
     * @apiGroup Folder
     * @apiVersion 1.0.0
     * @apiPermission upload_files
     */
    public function deleteItem($request) {
        if (($permit = Service::permit()) !== null) {
            return $permit;
        }

        $id = $request->get_param('id');

        $delete = wp_rml_delete($id);

        if ($delete === true) {
            return new WP_REST_Response($delete);
        } else {
            return new WP_Error('rest_rml_folder_delete', implode(' ', $delete), ['status' => 500]);
        }
    }

    /**
     * See API docs.
     *
     * @param WP_REST_Request $request
     * @return WP_REST_Response|WP_Error
     *
     * @api {get} /realmedialibrary/v1/folders/:id/meta Get the HTML meta content
     * @apiName GetFolderMeta
     * @apiGroup Folder
     * @apiVersion 1.0.0
     * @apiPermission upload_files
     */
    public function getMetaHTML($request) {
        if (($permit = Service::permit()) !== null) {
            return $permit;
        }

        $id = $request->get_param('id');
        return new WP_REST_Response([
            'html' => Meta::getInstance()->prepare_content($id)
        ]);
    }

    /**
     * See API docs.
     *
     * @param WP_REST_Request $request
     * @return WP_REST_Response|WP_Error
     *
     * @api {put} /realmedialibrary/v1/folders/:id/meta Update meta of a folder
     * @apiDescription Send a key value map of form data so Meta implementations (IMetadata) can handle it
     * @apiName UpdateFolderMeta
     * @apiGroup Folder
     * @apiVersion 1.0.0
     * @apiPermission upload_files
     */
    public function updateMeta($request) {
        if (($permit = Service::permit()) !== null) {
            return $permit;
        }

        $folder = wp_rml_get_object_by_id($request->get_param('id'));
        if (!is_rml_folder($folder)) {
            return new \WP_Error('rest_rml_folder_meta_update_not_found', 'Not found', ['status' => 404]);
        }

        /**
         * This filter is called to save the metadata. You can use the $_POST
         * fields to validate the input. If an error occurs you can pass an
         * "error" array (string) to the response. Do not use this filter directly instead use the
         * add_rml_meta_box() function!
         *
         * @param {array} $response The response passed to the frontend
         * @param {WP_REST_Request} $request The server request
         * @hook RML/Folder/Meta/Save
         * @return {array}
         */
        $response = apply_filters('RML/Folder/Meta/Save', ['errors' => [], 'data' => []], $folder, $request);

        if (is_array($response) && isset($response['errors']) && count($response['errors']) > 0) {
            return new WP_Error('rest_rml_folder_update', $response['errors'], ['status' => 500]);
        } else {
            if (isset($response['data']) && is_array($response['data'])) {
                $response = $response['data'];
            }
            return new WP_REST_Response($response);
        }
    }

    /**
     * See API docs.
     *
     * @param WP_REST_Request $request
     * @return WP_REST_Response|WP_Error
     *
     * @api {put} /realmedialibrary/v1/folders/:id Update a folder by id
     * @apiParam {string} name The new name for the folder
     * @apiName UpdateFolder
     * @apiGroup Folder
     * @apiVersion 1.0.0
     * @apiPermission upload_files
     */
    public function updateItem($request) {
        if (($permit = Service::permit()) !== null) {
            return $permit;
        }

        $name = $request->get_param('name');
        $id = $request->get_param('id');

        $update = wp_rml_rename($name, $id);

        if ($update === true) {
            $folder = wp_rml_get_by_id($id, null, true);
            return new WP_REST_Response($folder->getPlain());
        } else {
            return new WP_Error('rest_rml_folder_update', implode(' ', $update), ['status' => 500]);
        }
    }
}
