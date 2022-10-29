"use strict";

var assert = require("chai").assert;

var xor = require("../../src/logic/xor");


suite("#xor", function () {
    function isEven(val) {
        return val % 2 === 0;
    }

    function isPositive(val) {
        return val > 0;
    }

    test("true", function () {
        assert.equal(xor(isEven)(2), true);
        assert.equal(xor(isEven, isPositive)(1), true);
        assert.equal(xor(isEven, isPositive)(-2), true);
    });

    test("false", function () {
        assert.equal(xor()(), false);
        assert.equal(xor(undefined)(), false);
        assert.equal(xor(null)(), false);
        assert.equal(xor(isEven)(1), false);
        assert.equal(xor(isEven, isPositive)(2), false);
        assert.equal(xor(isEven, isPositive)(-1), false);
    });

    test("exception", function () {
        assert.throws(xor.bind(null, false), TypeError);
        assert.throws(xor.bind(null, isEven, 0), TypeError);
    });

});