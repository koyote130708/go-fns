function filterFunctions(fns) {
    var filtered = [];

    for (var i = 0; i < fns.length; i++) {
        if (typeof fns[i] === "function") {
            filtered.push(fns[i]);
        }
    }
    return filtered;
}

module.exports = filterFunctions;