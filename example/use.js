"use strict";

/**
 * This is an example implementation of the use()-interface. It calls the given plugin with the current
 * context as first argument and the given config as second. Additionally it remembers what plugins have been
 * applied and thus won't apply the same plugin twice.
 *
 * @param {Function} plugin
 * @param {Object=} config
 * @returns {Object} this
 */
function use(plugin, config) { /*jshint validthis: true */

    if (use.plugins.indexOf(plugin) === -1) {
        plugin(this, config);
        use.plugins.push(plugin);
    }

    return this;
}
use.plugins = [];

exports.use = use;