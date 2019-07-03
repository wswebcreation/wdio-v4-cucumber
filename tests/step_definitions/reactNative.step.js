import { Given, When, Then } from 'cucumber';
import { USERS } from '../config/constants';
import Login from '../screen-objects/login';
import Booking from '../screen-objects/booking';


Given(/I open the Hilton App/, () => {
    // This will the same code for iOS and Android
    // May add a reset function or something here so you can restart the app between tests
});

When(/I login in as a (valid|invalid) user/, userType => {
    // The usertype will tell something about the user, store those credentials somewhere
    // in a constant file and provide them to a login method

    // Determine based on the userType which user you need to use
    Login.signIn(USERS[ userType.toUpperCase() ]);
});

When(/I want to book a room/, table => {
    const bookingData = table.hashes();

    Booking.bookRoom(bookingData);
});

Then(/I will be presented a confirmation/, () => {
    // Do something here, I think you will get the idea
});
