const assert = require('assert');
const { Given, Then, When } = require('cucumber');
import HiltonHomePage from '../page/hiltonHomePage';
import OffersPage from '../page/offersPage';

Given(/^I use a web browser to navigate to the Hilton home page$/, function () {
	HiltonHomePage.open();
	assert(HiltonHomePage.isLoaded());
});

When(/^I navigate to Offers$/, function () {
	HiltonHomePage.goToOffers();
});

Then(/^the Offers page loads successfully$/, function () {
	assert(OffersPage.isLoaded());
});
