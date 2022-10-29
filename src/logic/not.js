var expectFunction = require("../expectFunction");

/**
 * Creates a function that negates the result of the given function.
 * The parameters you pass when invoking the created function will be passed down to the given function 
 * with the this binding of the given function.
 * @param {Function} fn The function to negate.
 * @returns {Function} The new function that negates the result of the given function.
 * @throws {TypeError} if the given value is not a function.
 * @example
 * not(isString)(1); // => true
 * 
 * not(isString)("abc"); // => false
 * @since 1.0.0
 * @static
 * @memberof Logic
 */
function not(fn) {
    expectFunction(fn);

    return function () {
        return !fn.apply(fn, arguments);
    };
}

module.exports = not;