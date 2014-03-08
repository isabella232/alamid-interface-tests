alamid-interface-tests
======================

Provides test-cases for common interfaces used in alamid-modules. By running these tests we're able to provide consistent apis across different modules.

Setup
-----

[![npm status](https://nodei.co/npm/alamid-interface-tests.png?downloads=true&stars=true)](https://npmjs.org/package/alamid-interface-tests)

[![build status](https://travis-ci.org/peerigon/alamid-interface-tests.png)](http://travis-ci.org/peerigon/alamid-interface-tests)
[![dependencies](https://david-dm.org/peerigon/alamid-interface-tests.png)](http://david-dm.org/peerigon/alamid-interface-tests)
[![devDependencies](https://david-dm.org/peerigon/alamid-interface-tests/dev-status.png)](http://david-dm.org/peerigon/alamid-interface-tests#info=devDependencies)

[![browser support](https://ci.testling.com/peerigon/alamid-interface-tests.png)
](https://ci.testling.com/peerigon/alamid-interface-tests)

Usage
---------

You can run the tests for the specific interface by calling

```javascript
var tests = require("alamid-interface-tests");

tests.run(interface, targetToTest);
```

while `interface` is one of the following strings:

- [**use**](https://github.com/peerigon/alamid-interface-tests/blob/master/example/use.js)
- [**constructor**](https://github.com/peerigon/alamid-interface-tests/blob/master/example/constructor.js)

<br />

Contributing
------------

Suggestions and bug-fixes are always appreciated. Don't hesitate to create an issue or pull-request. All contributed code should pass
1. the tests in node.js by running `npm test`
2. the tests in all major browsers by running `npm run-script test-browser` and then visting `http://localhost:8080/bundle`

<br />

License
-------

[Unlicense](http://unlicense.org/)