<?php
namespace DevOwl\Freemium;

use MatthiasWeb\Utils\Base;

// @codeCoverageIgnoreStart
defined('ABSPATH') or die('No script kiddies please!'); // Avoid direct file request
// @codeCoverageIgnoreEnd

trait Assets {
    /**
     * C'tor.
     */
    public function localizeFreemiumScript() {
        /**
         * This trait always needs to be used along with base trait.
         *
         * @var Base
         */
        $base = $this;

        /**
         * This trait always needs to be used along with base trait.
         *
         * @var FreemiumProvider
         */
        $freemium = $this;

        /**
         * This trait always needs to be used along with base trait.
         *
         * @var ICore
         */
        $core = $base->getCore();

        return [
            'isPro' => $freemium->isPro(),
            'showProHints' => current_user_can('install_plugins') && !$freemium->isPro(),
            'proUrl' => $base->getPluginConstant(FreemiumProvider::$PLUGIN_CONST_PRO_VERSION),
            'showLiteNotice' => !$core->isLiteNoticeDismissed()
        ];
    }
}