class BasePage {

    constructor(){ };

    get title() { return browser.getTitle(); }; 
    
    open(path) {
        browser
		.url('/${path}');
    }

}

module.exports = BasePage;