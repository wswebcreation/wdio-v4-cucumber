const assert = require('assert');
const { Given, Then, When } = require('cucumber');
import HiltonHomePage from '../screen-objects/hiltonMobileAppPage';
import SettingsPage from '../screen-objects/settingsPage';
import CleaningValuesTab from '../screen-objects/cleaningValuesTab';

//Write all steps in third-person point of view
Given(/^the user opens the Hilton mobile app$/, function () {
	HiltonMobileAppPage.open();
	assert(HiltonMobileAppPage.isLoaded());
});
When(/^the user opens the Cleaning Values setting of the Memphis property$/, function () {
	HiltonHomePage.openSettings();
	SettingsPage.goToCleaningValues();
});
Then(/^the page will display the correct room types$/, function () {
	assert(CleaningValuesTab.containsAllRoomTypes());
});
