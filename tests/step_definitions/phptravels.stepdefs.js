const assert = require('assert');
const { Given, Then, When } = require('cucumber');
import PhpTravelsHomePage from '../page/phpTravelsHomePage';
import SearchResultsPage from '../page/searchResultsPage';

Given(/^the user navigates to the PHP Travels home page$/, function () {
	PhpTravelsHomePage.open();
	assert(PhpTravelsHomePage.isLoaded());
});

When(/^the user searches for a room$/, table => {
    const searchData = table.hashes();
    PhpTravelsHomePage.searchRoom(searchData);
});

Then(/^the user is presented a list of options$/, function () {
	assert(SearchResultsPage.isLoaded());
});
Then(/^the user sees the PHP Travels home page$/, function () {
	assert(PhpTravelsHomePage.isLoaded());
});
