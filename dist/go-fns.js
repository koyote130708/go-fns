(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Functions"] = factory();
	else
		root["Functions"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** 
* @namespace Utility 
*/
/**
* Propositional logic connectives
* @namespace Logic 
*/
module.exports.pipe = __webpack_require__(1);
module.exports.spread = __webpack_require__(3);
module.exports.attempt = __webpack_require__(5);
module.exports.repeat = __webpack_require__(6);
module.exports.delay = __webpack_require__(7);

module.exports.and = __webpack_require__(8);
module.exports.or = __webpack_require__(10);
module.exports.xor = __webpack_require__(11);
module.exports.nor = __webpack_require__(12);
module.exports.not = __webpack_require__(13);

/***/ }),
/* 1 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var expectFunctions = __webpack_require__(2);

/**
 * Creates a function that executes a series of functions in the order provided.
 * First it passes the parameters to the first function and then the output 
 * is used as the input for the next function in the sequence, 
 * and so on until it reaches the end and finally it returns the output of the last function.
 * @param {...Function} fns The functions to execute sequentially.
 * @returns {Function} The new function that sequentially executes the given functions.
 * @throws {TypeError} if any of the given values is not a function, null or undefined.
 * @example
 * pipe(Math.floor)(4.5); // => 4
 * 
 * pipe(Math.floor, Math.sqrt)(4.5); // => 2
 * @since 1.0.0
 * @static
 * @memberof Utility
 */
function pipe(fns) {
    var queue = expectFunctions(arguments);

    return function () {
        var result = queue[0] != null ? queue[0].apply(this, arguments) : undefined;
        for (var i = 1; i < queue.length; i++) {
            result = queue[i].call(this, result);
        }
        return result;
    };
}

module.exports = pipe;

/***/ }),
/* 2 */
/***/ ((module) => {

function expectFunctions(args) {
    for (var i = 0; i < args.length; i++) {
        if (args[i] != null && typeof args[i] !== "function") {
            throw new TypeError("Expected a function, but found: " + args[i]);
        }
    }
    return args;
}

module.exports = expectFunctions;

/***/ }),
/* 3 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var expectFunction = __webpack_require__(4);

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

/***/ }),
/* 4 */
/***/ ((module) => {

function expectFunction(arg) {
    if (typeof arg !== "function") {
        throw new TypeError("Expected a function, but found: " + arg);
    }
    return arg;
}

module.exports = expectFunction;

/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var expectFunction = __webpack_require__(4);

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

/***/ }),
/* 6 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var expectFunction = __webpack_require__(4);

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

/***/ }),
/* 7 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var expectFunction = __webpack_require__(4);

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

/***/ }),
/* 8 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var expectFunctions = __webpack_require__(2);
var filterFunctions = __webpack_require__(9);

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

/***/ }),
/* 9 */
/***/ ((module) => {

function filterFunctions(fns) {
    var filtered = [];

    for (var i = 0; i < fns.length; i++) {
        if (typeof fns[i] === "function") {
            filtered.push(fns[i]);
        }
    }
    return filtered;
}

module.exports = filterFunctions;

/***/ }),
/* 10 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var expectFunctions = __webpack_require__(2);
var filterFunctions = __webpack_require__(9);

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

/***/ }),
/* 11 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var expectFunctions = __webpack_require__(2);
var filterFunctions = __webpack_require__(9);

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

/***/ }),
/* 12 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var expectFunctions = __webpack_require__(2);
var filterFunctions = __webpack_require__(9);

/**
 * Creates a function that tests if all the given functions return a falsy value.
 * The parameters you pass when invoking the created function will be passed down to the given functions 
 * with the this binding of the respective function.
 * @param {...Function} fns The functions to test.
 * @returns {Function} The new function that tests if all the given functions return a falsy value.
 * @throws {TypeError} if any of the given values is not a function, null or undefined.
 * @example
 * nor(isString, isNumber)(true); // => true
 * 
 * nor(isString, isNumber)("abc"); // => false
 * @since 1.0.0
 * @static
 * @memberof Logic
 */
function nor(fns) {
    fns = filterFunctions(expectFunctions(arguments));

    return function () {
        for (var i = 0; i < fns.length; i++) {
            if (fns[i].apply(this, arguments)) {
                return false;
            }
        }
        return fns.length > 0;
    };
}

module.exports = nor;

/***/ }),
/* 13 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var expectFunction = __webpack_require__(4);

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

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});