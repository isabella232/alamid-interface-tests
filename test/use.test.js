"use strict";

var index = require("../lib/index.js");

describe("test use()-interface", function () {
    index.use({
        use: require("../example/use.js")
    });
});