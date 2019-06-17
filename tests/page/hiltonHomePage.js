const BasePage = require('./basePage');

class HiltonHomePage extends BasePage {

    constructor() {
        super();
    }
    
    open() {
       super.open("");
    }

    isLoaded() {
        $('#NavMenu').isDisplayedInViewport();
    }
    
    goToOffers() {
        $('a*=Offers').click();
    }
};

module.exports = HiltonHomePage;