"use strict";

var assert = require("chai").assert;

var not = require("../../src/logic/not");


suite("#not", function () {
    function isNumber(val) {
        return typeof val === "number";
    }

    test("true", function () {
        assert.equal(not(isNumber)("1"), true);
    });

    test("false", function () {
        assert.equal(not(isNumber)(1), false);
    });

    test("exception", function () {
        assert.throws(not, TypeError);
        assert.throws(not.bind(null, null), TypeError);
    });
});
