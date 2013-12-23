"use strict";

var chai = require("chai"),
    sinon = require("sinon"),
    expect = chai.expect;

chai.Assertion.includeStack = true;
chai.use(require("sinon-chai"));

/**
 * Registers tests to check the use()-interface on the given target.
 *
 * @param {Object} target
 */
function use(target) {
    describe(".use(plugin, config?)", function () {
        var plugin,
            config;

        beforeEach(function () {
            plugin = sinon.spy();
            config = {};
        });

        it("should provide a plugin-interface", function () {
            target.use(plugin, config);
            expect(plugin).to.have.been.calledWith(target, config);
        });

        it("should apply the same plugin only once", function () {
            target.use(plugin, config);
            target.use(plugin, config);
            expect(plugin).to.have.been.calledOnce;
        });

        it("should be usable on other objects too", function () {
            var otherObj = {
                use: target.use
            };

            otherObj.use(plugin);
            expect(plugin).to.have.been.calledWith(otherObj);
        });

        it("should not apply the same plugin on other objects", function () {
            var otherObj = {
                use: target.use
            };

            target.use(plugin, config);
            otherObj.use(plugin);
            expect(plugin).to.have.been.calledOnce;
        });

        it("should be chainable", function () {
            expect(target.use(function () {})).to.equal(target);
        });

    });
}

module.exports = use;