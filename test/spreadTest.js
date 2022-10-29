"use strict";

var assert = require("chai").assert;

var spread = require("../src/spread");

suite("#spread", function () {

    function sum(a, b) {
        return a + b;
    }

    test("normal", function () {
        assert.equal(sum([1, 2]), "1,2undefined");
        assert.equal(spread(sum)([1, 2]), 3);
    });

    test("exceptions", function () {
        assert.throws(spread.bind(null, null), TypeError);
    });

});