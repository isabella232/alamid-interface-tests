"use strict";

var index = require("../lib/index.js");

describe("test constructor()-interface", function () {
    index.constructor(require("../example/constructor.js"));
});