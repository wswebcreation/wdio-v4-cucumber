import BasePage from './basePage'

class OffersPage extends BasePage {

	constructor() {
		super();
	}

	open() {
		super.open('');
	}

	isLoaded() {
		/**
		 * @TODO:
		 * This is bad practice, this will not say if the page is loaded yes or no
		 * You also need to return the value, otherwise the method will not work.
		 * Secondly the page could have a index.html or have some params
		 */
		return browser.getUrl() === 'https://hiltonhonors3.hilton.com/en/offers';
	}
};

export default new OffersPage();
