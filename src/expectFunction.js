function expectFunction(arg) {
    if (typeof arg !== "function") {
        throw new TypeError("Expected a function, but found: " + arg);
    }
    return arg;
}

module.exports = expectFunction;