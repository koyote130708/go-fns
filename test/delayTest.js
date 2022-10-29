"use strict";

var assert = require("chai").assert;

var delay = require("../src/delay");

suite("#delay", function () {

    var counter = 0;

    function increment() {
        counter++;
    }

    test("normal", function () {
        assert.equal(counter, 0);
        
        delay(increment);
        
        assert.equal(counter, 0);

        setTimeout(function () {
            assert.equal(counter, 1);

            delay(increment, 100);

            assert.equal(counter, 1);

            setTimeout(function () {
                assert.equal(counter, 2);
            }, 100);
        }, 10);


    });

    test("exceptions", function () {
        assert.throws(delay, TypeError);
        assert.throws(delay.bind(null, null), TypeError);
    });

});
