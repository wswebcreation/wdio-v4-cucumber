class loginScreenObject {
    get username() {
        return $('username-selector');
    }

    get password() {
        return $('password-selector');
    }

    get next() {
        return $('next-selector');
    }

    get loginButton() {
        return $('loginButton-selector');
    }

    /**
     * Sign in for Android, the steps for Android is for example a little bit different
     * because we need to click on next after filling each field, but in the end the
     * behaviour is the same, we signin
     *
     * @param data
     * @param {string} data.username
     * @param {string} data.password
     */
    signIn(data){
        this.username.addValue(data.username);
        this.next.click();
        this.password.addValue(data.password);
        this.next.click();
        this.loginButton.click();
    }
}
export default new loginScreenObject();
