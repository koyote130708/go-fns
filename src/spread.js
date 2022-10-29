var expectFunction = require("./expectFunction");

/**
 * Creates a function that takes an array of values and passes the values to the given function as individual parameters.
 * @param {Function} fn The function to execute with individual parameters.
 * @returns {Function} The new function that passes an array of values to the given function as individual parameters.
 * @throws {TypeError} if <code>fn</code> is not a function.
 * @example
 * function sum(a, b) {
 *    return a + b;
 * }
 * 
 * spread(sum)([1, 2]); // => 3
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax|Spread operator}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply|Function.prototype.apply}
 * @since 1.0.0
 * @static
 * @memberof Utility
 */
function spread(fn) {
    expectFunction(fn);

    return function (args) {
        return fn.apply(this, args);
    };
}

module.exports = spread;