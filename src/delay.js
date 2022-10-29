var expectFunction = require("./expectFunction");

/**
 * Executes a function after a specified number of milliseconds with the arguments provided.
 * @param {Function} fn The function to execute after a delay.
 * @param {number} [delay=0] The number of milliseconds to wait before executing the function.
 * @param {...*} [args] The arguments for the function.
 * @returns {number} The timer id.
 * @throws {TypeError} if <code>fn</code> is not a function.
 * @example
 * delay(log, 1000, "hi"); // => prints "hi" after 1 second.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/setTimeout|setTimeout}
 * @since 1.0.0
 * @static
 * @memberof Utility
 */
function delay(fn, delay, args) {
    expectFunction(fn);
    
    delay = delay != null ? delay : 0;
    return setTimeout.apply(this, arguments);
}

module.exports = delay;