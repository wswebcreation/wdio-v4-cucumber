import multipleCucumberHtmlReporter from 'wdio-multiple-cucumber-html-reporter';

const { After, Status } = require('cucumber');

After((scenarioResult) => {
	if (scenarioResult.result.status === Status.FAILED) {
		// It will add the screenshot to the JSON
		multipleCucumberHtmlReporter.attach(browser.screenshot(), 'image/png', 'after');
	}
	return scenarioResult.status;
});
