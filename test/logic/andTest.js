"use strict";

var assert = require("chai").assert;

var and = require("../../src/logic/and");


suite("#and", function () {
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
        assert.equal(and(isNumber)(1), true);
        assert.equal(and(isNumber, isEven)(2), true);
        assert.equal(and(isNumber, isEven, isPositive)(2), true);
    });

    test("false", function () {
        assert.equal(and()(), false);
        assert.equal(and(undefined)(), false);
        assert.equal(and(null)(), false);
        assert.equal(and(isNumber)("1"), false);
        assert.equal(and(isNumber, isEven)(1), false);
        assert.equal(and(isNumber, isEven, isPositive)(-2), false);
    });

    test("exception", function () {
        assert.throws(and.bind(null, false), TypeError);
        assert.throws(and.bind(null, isEven, 0), TypeError);
    });

});
