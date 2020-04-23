<?php
namespace MatthiasWeb\RealMediaLibrary\overrides\interfce;

use DevOwl\Freemium\ICore;

// @codeCoverageIgnoreStart
defined('ABSPATH') or die('No script kiddies please!'); // Avoid direct file request
// @codeCoverageIgnoreEnd

interface IOverrideCore extends ICore {
    /**
     * Additional constructor.
     */
    public function overrideConstruct();

    /**
     * Additional init.
     */
    public function overrideInit();

    /**
     * Set and/or get the value if the license notice is dismissed.
     *
     * @param boolean $set
     * @return boolean
     */
    public function isLicenseNoticeDismissed($set = null);

    /**
     * Get the updater instance.
     *
     * @see https://github.com/matzeeable/wordpress-plugin-updater
     */
    public function getUpdater();
}
