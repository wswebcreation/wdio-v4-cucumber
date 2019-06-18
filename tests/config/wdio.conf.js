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
		screenResolution: '1600x1200',
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
		// require: [ './step_definitions/**/*.js'
		/**
		 * @TODO:
		 * This was my fault, I should have set the correct path. You need to set a absolute path
		 * from where the config file is ran based on the pacakge.json, so from the root of the projects
		 */
		require: [
			'./tests/step_definitions/**/*.js',
			'./tests/config/*.hook.js',
		],   // <string[]> (file/dir) require files before executing features
		backtrace: true,    // <boolean> show full backtrace for errors
		/**
		 * @TODO:
		 * Why did you add this?
		 * The compiler is already in the before hook, see below.
		 */
		compiler: [ 'js:@babel/register' ], // <string[]> filetype:compiler used for processing required features
		// compiler: [],       // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
		failAmbiguousDefinitions: true,       // <boolean< Treat ambiguous definitions as errors
		dryRun: false,      // <boolean> invoke formatters without executing steps
		failFast: false,    // <boolean> abort the run on first failure
		ignoreUndefinedDefinitions: false,    // <boolean> Enable this config to treat undefined definitions as warnings
		name: [],           // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
		snippets: true,     // <boolean> hide step definition snippets for pending steps
		format: [ 'pretty' ], // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output
													// (repeatable)
		colors: true,       // <boolean> disable colors in formatter output
		/**
		 * @TODO:
		 * Why did you add the `snippets` again?
		 */
		// snippets: false,    // <boolean> hide step definition snippets for pending steps
		source: false,      // <boolean> hide source uris
		profile: [],        // <string[]> (name) specify the profile to use
		strict: true,       // <boolean> fail if there are any undefined or pending steps
		tagExpression: 'not @Pending',      // <string> (expression) only execute the features or scenarios with tags matching the expression,
																				// see https://docs.cucumber.io/tag-expressions/
		/**
		 * @TODO
		 * This is increased to 60 seconds (page loads very slow), why did you set it to 2 seconds?
		 */
		timeout: 120000,    // <number> timeout for step definitions
		// timeout: 2000,    // <number> timeout for step definitions
		tagsInTitle: false,                 // <boolean> add cucumber tags to feature or scenario name
		snippetSyntax: undefined,           // <string> specify a custom snippet syntax
	},
	// cucumberOpts: {
	// 	/**
	// 	 * Place a reference here  to all JS files that you need during your tests
	// 	 */
	// 	require: [
	// 		'../step_definitions/**/*.js',
	// 		'../page/**/*.js',
	// 		'../step_definitions/*.js',
	// 		'../page/*.js'
	// 	],
	// 	backtrace: false,   // <boolean> show full backtrace for errors
	// 	compiler: [],       // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
	// 	dryRun: false,      // <boolean> invoke formatters without executing steps
	// 	failFast: false,    // <boolean> abort the run on first failure
	// 	format: [ 'pretty' ], // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output
	// 												// (repeatable)
	// 	colors: true,       // <boolean> disable colors in formatter output
	// 	snippets: true,     // <boolean> hide step definition snippets for pending steps
	// 	source: true,       // <boolean> hide source uris
	// 	profile: [],        // <string[]> (name) specify the profile to use
	// 	strict: false,      // <boolean> fail if there are any undefined or pending steps
	// 	tags: [],           // <string[]> (expression) only execute the features or scenarios with tags matching the expression
	// 	timeout: 20000,     // <number> timeout for step definitions
	// 	ignoreUndefinedDefinitions: false, // <boolean> Enable this config to treat undefined definitions as warnings.
	// 	compiler: ['js:babel-core/register'], // <string[]> filetype:compiler used for processing required features
	// },
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
