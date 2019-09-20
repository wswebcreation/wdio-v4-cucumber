import BasePage from './basePage'
import settingsPage from './settingsPage';

class CleaningValuesTab extends settingsPage {

	constructor() {
		super();
	}

	containsAllRoomTypes() {
		//1. get every room type from the page like K1Rz and so on
		//2. Iterate through the collection of the Room Types found on the page
		//3. Compare that to your expected list of room types that you got from the API for this property
	}
};

export default new CleaningValuesTab();
