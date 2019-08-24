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
* Run Tests:
	```
	$ npm run test
	```

* Tests in Parallel:
	```
	$ ./node_modules/.bin/wdio wdio.conf.js
	```

[Sauce Labs Dashboard](https://saucelabs.com/beta/dashboard/)

### Great BDD Resources
- BDD 101: https://automationpanda.com/2017/01/25/bdd-101-introducing-bdd/
- BDD 101: UNIT, INTEGRATION, AND END-TO-END TESTS: https://automationpanda.com/2017/10/14/bdd-101-unit-integration-and-end-to-end-tests/

### Visual Testing Best Practices
These are the best practices for automated visual testing. Follow them closely to avoid problems and failure in your automation efforts:
1. Do NOT try to visually validate every page
It's important to understand that we don't want to try and visually validate every single page right away.
Start Small, and Build Up! Agile methodoloy! Small pieces of code go to production often.
This means, add 1 of your most important, Publicly facing pages, across your most important resolutions and browsers.
Let this run for 5 days, every single day, as part of CI.
Is it providing you value and are you getting great feedback from this automation?
If yes, now it's time to add another page.
2. Always prefer stability over more automation.
Never forget the goal of automation is to make sure that we help to create high quality software.
To get to quality software, it's important to release quickly and often. Automation is the key to that!
However, if automation doesn't provide correct results, it is simply Useless!
Before adding more automation, always make sure that current automation is 99.5% reliable!
You can read more here: https://www.ultimateqa.com/automation-patterns-antipatterns/
3. Only do visual validation on publicly facing websites!
Visual validation is important for aesthetics.

### Thanks
Big thanks to Wim Selles who was the starter of this working solution.
He provided the foundational working code that made all of this possible.
He is my master and I am his grasshopper!
[@wswebcreation](https://github.com/wswebcreation)