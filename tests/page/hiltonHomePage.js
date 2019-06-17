const BasePage = require('./basePage');

class HiltonHomePage extends BasePage {

    constructor() {
        super();
    }
    
    open() {
       super.open("");
    }

    isLoaded() {
        browser.isDisplayedInViewport('#NavMenu')
    }
    
    goToOffers() {
        browser.click('a*=Offers');
    }
};

module.exports = HiltonHomePage;