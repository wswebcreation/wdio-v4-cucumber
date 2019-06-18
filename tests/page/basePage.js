class BasePage {
	constructor() { };

	get title() { return browser.getTitle(); };

	open(path) {
		/**
		 * To use a variable in a string you need to use backticks
		 */
		browser.url(`/${path}`);
	}

}

export default BasePage;
