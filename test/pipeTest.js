"use strict";

var assert = require("chai").assert;

var pipe = require("../src/pipe");

suite("#pipe", function () {

    function add1(val) {
        return val + 1;
    }

    function add2(val) {
        return val + 2;
    }

    test("0 function", function () {
        assert.equal(pipe()(1), undefined);
    });

    test("1 function", function () {
        assert.equal(pipe(add1)(1), 2);
    });

    test("2 functions", function () {
        assert.equal(pipe(add1, add2)(1), 4);
    });

    test("3 functions", function () {
        assert.equal(pipe(add1, add2, add2)(1), 6);
    });

    test("exceptions", function () {
        assert.throws(pipe.bind(null, add1, false), TypeError);
        assert.throws(pipe.bind(null, 0, add1), TypeError);
    });

});

