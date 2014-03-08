"use strict";

var chai = require("chai"),
    sinon = require("sinon"),
    expect = chai.expect;

chai.Assertion.includeStack = true;
chai.use(require("sinon-chai"));

/**
 * Registers tests to check the constructor()-interface on the given target.
 *
 * @param {Function} target
 */
function constructor(target) {
    var constr;

    function createSpy() {
        constr = target.prototype.constructor;
        target.prototype.constructor = sinon.spy();
    }

    function destroySpy() {
        target.prototype.constructor = constr;
    }

    it("should provide the possibility to hook into instance constructor by overriding .prototype.constructor", function () {
        createSpy();
        target();

        expect(target.prototype.constructor).to.have.been.called.once;
    });

    it("should pass the right context to the constructor", function () {
        var context = {};

        createSpy();
        target.apply(context);

        expect(target.prototype.constructor).to.have.been.calledOn(context);
    });

    it("should pass all arguments to the constructor", function () {
        var args = [1, 2, 3, 4, 5];

        createSpy();
        target.apply({}, args);

        expect(target.prototype.constructor).to.have.been.calledWith(1, 2, 3, 4, 5);

        destroySpy();
    });
}

module.exports = constructor;