var expectFunctions = require("../expectFunctions");
var filterFunctions = require("../filterFunctions");

/**
 * Creates a function that tests if all the given functions return a truthy value. 
 * The parameters you pass when invoking the created function will be passed down to the given functions 
 * with the this binding of the respective function.
 * @param {...Function} fns The functions to test.
 * @returns {Function} The new function that tests if all the given functions return a truthy value.
 * @throws {TypeError} if any of the given values is not a function, null or undefined.
 * @example
 * and(isString, isPrimitive)("abc"); // => true
 *
 * and(isString, isPrimitive)(new String("abc")); // => false
 * @since 1.0.0
 * @static
 * @memberof Logic
 */
function and(fns) {
    fns = filterFunctions(expectFunctions(arguments));
    
    return function () {
        for (var i = 0; i < fns.length; i++) {
            if (!fns[i].apply(fns[i], arguments)) {
                return false;
            }
        }
        return fns.length > 0;
    };
}

module.exports = and;