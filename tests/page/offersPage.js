const BasePage = require('./basePage');

class OffersPage extends BasePage {

    constructor() {
        super();
    }
    
    open() {
       super.open("");
    }

    isLoaded() {
        browser.getUrl() == "https://hiltonhonors3.hilton.com/en/offers";
    }
};

module.exports = OffersPage;