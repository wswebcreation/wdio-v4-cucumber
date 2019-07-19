import BasePage from './basePage'

class PhpTravelsHomePage extends BasePage {

	constructor() {
		super();
	}

	open() {
		browser.url('https://www.phptravels.net')
		//super.open('https://www.phptravels.net');
	}

	isLoaded() {
		const myAccountLocator = $('#li_myaccount');
		return myAccountLocator.waitForVisible(10000);
	}
	
	get hotelOrCitySearchBox() {
        return $('.select2-search');
	}
	get checkinField() {
        return $('.form input-lg dpd1');
	}
	get checkoutField() {
        return $('.form input-lg dpd2');
	}
	get childrenAddButton() {
        return $('#childPlusBtn > i');
	}
	get adultsAddButton() {
        return $('#adultPlusBtn > i');
	}
	get searchButton() {
		//TODO, don't use such locators, I was just lazy
		return $('#hotels > form > div.col-md-2.form-group.go-right.col-xs-12.search-button > button');
	}
    /**
     *
     * @param searchData
     * @param {string} bookingData.place
     * @param {string} bookingData.when
     * @param {string} bookingData.for
     * @param {string} bookingData.adults
     * @param {string} bookingData.kids
     * @param {string} bookingData.rates
     */
    searchRoom(searchData){
        if (searchData.place !== "") {
			console.log(searchData.place);
            this.hotelOrCitySearchBox.addValue(searchData.place);
        }
        if (searchData.checkin !== "") {
			console.log(searchData.checkin);
            this.checkinField.addValue(searchData.checkin);
        }
        if (searchData.checkout !== "") {
            this.checkoutField.addValue(searchData.checkout);
		}
		if (searchData.adults !== "") {
            this.adultsAddButton.addValue(searchData.adults);
		}
		if (searchData.kids !== "") {
            this.childrenAddButton.addValue(searchData.kids);
		}
		if (searchData.rates !== "") {
			//
        }
        this.searchButton.click();
    }
};

export default new PhpTravelsHomePage();
