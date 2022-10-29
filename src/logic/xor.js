var expectFunctions = require("../expectFunctions");
var filterFunctions = require("../filterFunctions");

/**
 * Creates a function that tests if exactly one of the given functions returns a truthy value.
 * The parameters you pass when invoking the created function will be passed down to the given functions 
 * with the this binding of the respective function.
 * @param {...Function} fns The functions to test.
 * @returns {Function} The new function that tests if exactly one of the given functions return a truthy value.
 * @throws {TypeError} if any of the given values is not a function, null or undefined.
 * @example
 * xor(isString, isNumber)("abc"); // => true
 * 
 * xor(isString, isNumber)(1);  // => true
 * 
 * xor(isString, isNumber)(true); // => false
 * @since 1.0.0
 * @static
 * @memberof Logic
 */
function xor(fns) {
    fns = filterFunctions(expectFunctions(arguments));
    
    return function () {
        var passed = 0;
        for (var i = 0; i < fns.length; i++) {
            if (fns[i].apply(this, arguments)) {
                if (++passed > 1) {
                    return false;
                }
            }
        }
        return passed === 1;
    };
}

module.exports = xor;