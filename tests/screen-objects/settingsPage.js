import BasePage from './basePage'

class SettingsPage extends BasePage {

	constructor() {
		super();
	}

	goToCleaningValues() {
		/**
		 * This is the new preferred way to interact with elements
		 * and makes the migration to wdio V5 easier because the above method
		 * will be removed from V5 (no selectors are allowed anymore with
		 * actions)
		 * 
		 * Here just click on the cleaning values tab
		 */		
		cleaningValuesElement = $('a*=cleaningValues');
		cleaningValuesElement.waitForVisible(25000);
		cleaningValuesElement.click();
	}
};

export default new SettingsPage();
