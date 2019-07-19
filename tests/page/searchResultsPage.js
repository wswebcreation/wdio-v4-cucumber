import BasePage from './basePage'

class SearchResultsPage extends BasePage {

	constructor() {
		super();
	}

	isLoaded() {
		const searchText = $('span=Filter Search');
		return searchText.waitForVisible(10000);
	}
};

export default new SearchResultsPage();
