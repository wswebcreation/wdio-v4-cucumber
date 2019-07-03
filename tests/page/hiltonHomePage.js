import BasePage from './basePage'

class HiltonHomePage extends BasePage {

	constructor() {
		super();
	}

	open() {
		super.open('');
	}

	isLoaded() {
		const header = $('#global_header');
		return header.waitForVisible(25000);
	}

	goToOffers() {
		/**
		 * This is the new preferred way to interact with elements
		 * and makes the migration to V5 easier because the above method
		 * will be removed from V5 (no selectors are allowed anymore with
		 * actions)
		 */
		
		offersElement = $('a*=menu_item_offers');
		offersElement.waitForVisible(25000);
		offersElement.click();
	}
};

export default new HiltonHomePage();
