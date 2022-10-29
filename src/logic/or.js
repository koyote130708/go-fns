var expectFunctions = require("../expectFunctions");
var filterFunctions = require("../filterFunctions");

/**
 * Creates a function that tests if any of the given functions return a truthy value.
 * The parameters you pass when invoking the created function will be passed down to the given functions 
 * with the this binding of the respective function.
 * @param {...Function} fns The functions to test.
 * @returns {Function} The new function that tests if any of the functions return a truthy value.
 * @throws {TypeError} if any of the given values is not a function, null or undefined.
 * @example
 * or(isString, isNumber)("abc"); // => true
 * 
 * or(isString, isNumber)(true); // => false
 * @since 1.0.0
 * @static
 * @memberof Logic
 */
function or(fns) {
    fns = filterFunctions(expectFunctions(arguments));

    return function () {
        for (var i = 0; i < fns.length; i++) {
            if (fns[i].apply(this, arguments)) {
                return true;
            }
        }
        return false;
    };
}

module.exports = or;