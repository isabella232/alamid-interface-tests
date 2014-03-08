"use strict";

/**
 * This is an example implementation of the constructor()-interface.
 *
 * If there is a function that is intended to create instances and thus be used with `new`, there should
 * be a constructor-property on the function's prototype. This way plugin authors have the possibility
 * to hook into instance construction.
 */
function MyClass() {
    MyClass.prototype.constructor.apply(this, arguments);
}

MyClass.prototype.constructor = function () {
    // Do the real work here!
};

module.exports = MyClass;