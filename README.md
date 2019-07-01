This code is provided on an "AS-IS” basis without warranty of any kind, either express or implied, including without limitation any implied warranties of condition, uninterrupted use, merchantability, fitness for a particular purpose, or non-infringement. Your tests and testing environments may require you to modify this framework. Issues regarding this framework should be submitted through GitHub. For questions regarding Sauce Labs integration, please see the Sauce Labs documentation at https://wiki.saucelabs.com/. This framework is not maintained by Sauce Labs Support.

### Environment Setup

1. Global Dependencies
    * Install [Node.js](https://nodejs.org/en/)
    * Or Install Node.js with [Homebrew](http://brew.sh/)
    ```
    $ brew install node
    ```
2. Sauce Credentials
    * In the terminal export your Sauce Labs Credentials as environmental variables:
    ```
    $ export SAUCE_USERNAME=<your Sauce Labs username>
	$ export SAUCE_ACCESS_KEY=<your Sauce Labs access key>
    ```
3. Project Dependencies
	* Install Node modules
	```
	$ npm install
	```

### Running Tests

* Tests in Parallel:
	```
	$ ./node_modules/.bin/wdio wdio.conf.js
	```

[Sauce Labs Dashboard](https://saucelabs.com/beta/dashboard/)

Great BDD Resources
- BDD 101: https://automationpanda.com/2017/01/25/bdd-101-introducing-bdd/
- BDD 101: UNIT, INTEGRATION, AND END-TO-END TESTS: https://automationpanda.com/2017/10/14/bdd-101-unit-integration-and-end-to-end-tests/