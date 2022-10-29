var expectFunction = require("./expectFunction");

/**
 * Attempts to execute a function and returns the result or if there was an error, the error object caught.
 * @param {Function} fn The function to attempt.
 * @param {...*} [args] The arguments for the function.
 * @returns {(*|Error)} The result of executing the function or the error object caught if there was an error.
 * @throws {TypeError} if <code>fn</code> is not a function.
 * @example
 * attempt(JSON.parse, "1"); // => 1
 * 
 * attempt(JSON.parse, ""); // => SyntaxError
 * 
 * @since 1.0.0
 * @static
 * @memberof Utility
 */
function attempt(fn, args) {
    expectFunction(fn);

    try {
        return fn.apply(fn, Array.prototype.slice.call(arguments, 1));
    } catch (err) {
        return err;
    }
}

module.exports = attempt;