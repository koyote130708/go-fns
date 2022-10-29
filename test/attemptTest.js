"use strict";

var assert = require("chai").assert;

var attempt = require("../src/attempt");

suite("#attempt", function () {

    test("no error", function () {
        assert.equal(attempt(JSON.parse, "1"), 1);
    });

    test("with error", function () {
        assert(attempt(JSON.parse, "") instanceof SyntaxError);
    });

    test("exceptions", function () {
        assert.throws(attempt, TypeError);
        assert.throws(attempt.bind(null, null), TypeError);
    });

});
