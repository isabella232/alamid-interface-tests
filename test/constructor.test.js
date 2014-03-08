"use strict";

var tests = require("../lib/index.js");

describe("test constructor()-interface", function () {
    tests.run("constructor", require("../example/constructor.js"));
});