import BasePage from './basePage'

class OffersPage extends BasePage {

	constructor() {
		super();
	}

	open() {
		super.open('');
	}

	isLoaded() {
        //todo not an ideal way to do this, better to sync on an element
		return browser.getUrl().includes("offers");
	}
};

export default new OffersPage();
