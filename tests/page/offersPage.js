const BasePage = require('./basePage');

class OffersPage extends BasePage {

    constructor() {
        super();
    }
    
    open() {
       super.open("");
    }

    isLoaded() {
        browser.url == "https://hiltonhonors3.hilton.com/en/offers";
    }
};

module.exports = OffersPage;