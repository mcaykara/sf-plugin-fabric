/**
 * @class Fabric
 * @since 1.0
 * @see https://fabric.io/home
 *
 * Fabric Base. Coordinates configuration and starts all provided kits.
 *
 */
function Fabric(params){}

/**
 * Initialize Fabric and all provided kits.Only the first call to this method is honored. Subsequent calls are no-ops.
 *
 *     @example
 *      const Crashlytics = require('sf-plugin-fabric/crashlytics');
 *      const Answers = require('sf-plugin-fabric/answers');
 *      Fabric.with([new Crashlytics(),new Answers()]);
 *
 * @method with
 * @param {Array} kits
 * @android
 * @ios
 * @static
 * @since 1.0
 */
Fabric.with = function(kits){};

module.exports = Fabric;
