// USE THE WEBSITE http://v4.webdriver.io/ FOR THE DOCS

exports.config = {
	//
	// ===========
	// Saucy stuff
	// ===========
	//
	services: [ 'sauce' ],
	user: process.env.SAUCE_USERNAME,
	key: process.env.SAUCE_ACCESS_KEY,

	//
	// ==================
	// Specify Test Files
	// ==================
	//
	specs: [
		'./tests/features/**/*.feature'
	],
	//
	// ============
	// Capabilities
	// ============
	//
	maxInstances: 10,
	capabilities: [ {
		browserName: 'chrome',
		platform: 'macOS 10.12',
		version: '70.0',
	} ],
	//
	// ===================
	// Test Configurations
	// ===================
	sync: true,
	logLevel: 'silent',
	coloredLogs: true,
	deprecationWarnings: true,
	bail: 0,
	screenshotPath: './errorShots/',
	baseUrl: 'https://hiltonhonors3.hilton.com/',
	waitforTimeout: 10000,
	connectionRetryTimeout: 90000,
	connectionRetryCount: 3,
	//
	//===============
	// Cucumber stuff
	//===============
	framework: 'cucumber',
	cucumberOpts: {
		/**
		 * Place a reference here  to all JS files that you need during your tests
		 */
		require: [
			'./features/step_definitions/**/*.js',
			'./features/page/**/*.js',
		],
		backtrace: false,   // <boolean> show full backtrace for errors
		compiler: [],       // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
		dryRun: false,      // <boolean> invoke formatters without executing steps
		failFast: false,    // <boolean> abort the run on first failure
		format: [ 'pretty' ], // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output
													// (repeatable)
		colors: true,       // <boolean> disable colors in formatter output
		snippets: true,     // <boolean> hide step definition snippets for pending steps
		source: true,       // <boolean> hide source uris
		profile: [],        // <string[]> (name) specify the profile to use
		strict: false,      // <boolean> fail if there are any undefined or pending steps
		tags: [],           // <string[]> (expression) only execute the features or scenarios with tags matching the expression
		timeout: 20000,     // <number> timeout for step definitions
		ignoreUndefinedDefinitions: false, // <boolean> Enable this config to treat undefined definitions as warnings.
	},
	reporters: [ 'spec', 'multiple-cucumber-html' ],
	reporterOptions: {
		htmlReporter: {
			jsonFolder: './tmp',
			reportFolder: `./tmp/report`,
			openReportInBrowser: true,
			removeFolders: true,
			// ... other options, see Options
			// https://github.com/wswebcreation/wdio-multiple-cucumber-html-reporter
		},
	},
	//
	// =====
	// Hooks
	// =====
	before: () => {
		require('@babel/register');
	},
}
