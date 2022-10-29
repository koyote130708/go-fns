"use strict";

var assert = require("chai").assert;

var nor = require("../../src/logic/nor");


suite("#nor", function () {

    function isEven(val) {
        return val % 2 === 0;
    }

    function isPositive(val) {
        return val > 0;
    }

    test("true", function () {
        assert.equal(nor(isEven)(1), true);
        assert.equal(nor(isEven, isPositive)(-1), true);
    });

    test("false", function () {
        assert.equal(nor()(), false);
        assert.equal(nor(undefined)(), false);
        assert.equal(nor(null)(), false);
        assert.equal(nor(isEven)(2), false);
        assert.equal(nor(isEven, isPositive)(1), false);
        assert.equal(nor(isEven, isPositive)(-2), false);
    });


    test("exception", function () {
        assert.throws(nor.bind(null, false), TypeError);
        assert.throws(nor.bind(null, isEven, 0), TypeError);
    });


});
