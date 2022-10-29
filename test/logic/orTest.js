"use strict";

var assert = require("chai").assert;

var or = require("../../src/logic/or");


suite("#or", function () {
    function isNumber(val) {
        return typeof val === "number";
    }

    function isEven(val) {
        return val % 2 === 0;
    }

    function isPositive(val) {
        return val > 0;
    }

    test("true", function () {
        assert.equal(or(isNumber)(1), true);
        assert.equal(or(isEven, isPositive)(1), true);
        assert.equal(or(isEven, isPositive)(-2), true);
    });

    test("false", function () {
        assert.equal(or()(), false);
        assert.equal(or(undefined)(), false);
        assert.equal(or(null)(), false);
        assert.equal(or(isNumber)("1"), false);
        assert.equal(or(isEven, isPositive)(-1), false);
    });

    test("exception", function () {
        assert.throws(or.bind(null, false), TypeError);
        assert.throws(or.bind(null, isEven, 0), TypeError);
    });

});
