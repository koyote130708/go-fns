var expectFunction = require("./expectFunction");

/**
 * Executes a function for a specified number of times and returns the results in a new array.
 * @param {Function} fn The function to execute.
 * @param {number} [count=0] The number of times to execute.
 * @param {...*} [args] The arguments for the function.
 * @returns {Array} The new array containing the results.
 * @throws {TypeError} if <code>fn</code> is not a function.
 * @example
 * repeat(Math.floor, 3, 1.5); // => [1, 1, 1]
 * @since 1.0.0
 * @static
 * @memberof Utility
 */
function repeat(fn, count, args) {
    expectFunction(fn);

    var results = [];
    count = count != null ? count : 0;

    for (var i = 0; i < count; i++) {
        results[i] = fn.apply(fn, Array.prototype.slice.call(arguments, 2));
    }
    return results;
}

module.exports = repeat;