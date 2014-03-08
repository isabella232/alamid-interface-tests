"use strict";

var tests = require("../lib/index.js");

describe("test use()-interface", function () {
    tests.run("use", require("../example/use.js"));
});