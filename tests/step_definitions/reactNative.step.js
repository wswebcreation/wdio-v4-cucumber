import { Given, When, Then } from 'cucumber';
import { USERS } from '../config/constants';
import LoginPage from '../screen-objects/login';
import BookingPage from '../screen-objects/booking';


Given(/I open the Hilton App/, () => {
    // This will the same code for iOS and Android
    // May add a reset function or something here so you can restart the app between tests
});

When(/I login in as a (valid|invalid) user/, userType => {
    //TODO this is what the manual testers would write
    //they can only code what has been created by the Automation Engineers
    //the Automation Engineers write the logic and maintain it inside of Page Objects
    //Also, notice how little code is in the Step Definitions, low maintenance
    LoginPage.signIn(USERS[ userType.toUpperCase() ]);
});

When(/I want to book a room/, table => {
    //TODO this is what the manual testers would write
    //they can only code what has been created by the Automation Engineers
    //the Automation Engineers write the logic and maintain it inside of Page Objects
    const bookingData = table.hashes();
    BookingPage.bookRoom(bookingData);
});

Then(/I will be presented a confirmation/, () => {
    // Do something here, I think you will get the idea
});
