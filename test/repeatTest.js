"use strict";

var assert = require("chai").assert;

var repeat = require("../src/repeat");

suite("#repeat", function () {

    function returnValue(val) {
        return val;
    }

    test("normal", function () {
        assert.deepEqual(repeat(returnValue), []);
        assert.deepEqual(repeat(returnValue, 1), [undefined]);
        assert.deepEqual(repeat(returnValue, 2, null), [null, null]);
        assert.deepEqual(repeat(returnValue, 2, "a"), ["a", "a"]);
    });

});
