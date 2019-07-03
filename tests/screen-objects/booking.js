class bookingScreenObject{
    /**
     * For React Native applications, the key is that they are created using the same exact
     * code base. This means that they have the same team working on the app with the
     * same release cycles and almost identical functionality.
     * Hence, automation code can be simplified since the majority of the 
     * functionality will remain the same between Android/iOS.
     * The main thing that will change are the locators.
     * But the interactions with those locators can remain the same in a single
     * Page Object. One page object for both iOS/Android
     */
    get place() {
        return browser.isIOS ? $('android-selector') : $('place-selector');
    }

    get when() {
        return browser.isIOS ? $('android-selector') : $('when-selector');
    }

    get for() {
        return browser.isIOS ? $('android-selector') : $('for-selector');
    }

    get adults() {
        return browser.isIOS ? $('android-selector') : $('for-selector');
    }

    get kids() {
        return browser.isIOS ? $('android-selector') : $('kids-selector');
    }

    get rates() {
        return browser.isIOS ? $('android-selector') : $('rates-selector');
    }

    get next() {
        return browser.isIOS ? $('android-selector') : $('next-selector');
    }

    get submitButton() {
        return browser.isIOS ? $('android-selector') : $('submitButton-selector');
    }
    /**
     * Book a room for iOS and Android
     *
     * @param bookingData
     * @param {string} bookingData.place
     * @param {string} bookingData.when
     * @param {string} bookingData.for
     * @param {string} bookingData.adults
     * @param {string} bookingData.kids
     * @param {string} bookingData.rates
     */
    bookRoom(bookingData){
        if (bookingData.place !== "") {
            this.place.addValue(bookingData.place);
            this.next.click();
        }
        if (bookingData.when !== "") {
            this.when.addValue(data.when);
            this.next.click();        
        }
        if (bookingData.for !== "") {
            this.for.addValue(data.for);
            this.next.click();        
        }
        //And so on until we successfully booked the room...
        this.submitButton.click();
    }
}

export default new bookingScreenObject();
