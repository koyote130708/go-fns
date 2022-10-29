function expectFunctions(args) {
    for (var i = 0; i < args.length; i++) {
        if (args[i] != null && typeof args[i] !== "function") {
            throw new TypeError("Expected a function, but found: " + args[i]);
        }
    }
    return args;
}

module.exports = expectFunctions;