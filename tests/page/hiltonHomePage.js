import BasePage from './basePage'

class HiltonHomePage extends BasePage {

	constructor() {
		super();
	}

	open() {
		super.open('');
	}

	isLoaded() {
		browser.isDisplayedInViewport('#NavMenu')
	}

	goToOffers() {
		// browser.click('a*=Offers');

		/**
		 * This is the new preferred way to interact with elements
		 * and makes the migration to V5 easier because the above method
		 * will be removed from V5 (no selectors are allowed anymore with
		 * actions)
		 */

		$('a*=Offers').click();
	}
};

export default new HiltonHomePage();
