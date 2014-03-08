"use strict";

var tests = {
    use: require("./use.js"),
    constructor: require("./constructor.js")
};

exports.run = function (test, target) {
    tests[test](target);
};