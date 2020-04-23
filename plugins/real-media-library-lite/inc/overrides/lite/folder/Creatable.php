<?php
namespace MatthiasWeb\RealMediaLibrary\lite\folder;

use MatthiasWeb\RealMediaLibrary\exception\OnlyInProVersionException;

// @codeCoverageIgnoreStart
defined('ABSPATH') or die('No script kiddies please!'); // Avoid direct file request
// @codeCoverageIgnoreEnd

trait Creatable {
    // Documented in IFolderActions
    public function resetSubfolderOrder() {
        throw new OnlyInProVersionException(__METHOD__);
    }

    // Documented in IFolderActions
    public function orderSubfolders($orderby, $writeMetadata = true) {
        throw new OnlyInProVersionException(__METHOD__);
    }

    // Documented in IFolderActions
    protected function applySubfolderOrderBy() {
        return false;
    }
}
