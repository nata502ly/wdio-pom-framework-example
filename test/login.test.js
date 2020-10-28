const loginPage = require('../pages/login.page.js');
const configData = require('../config');
const constant = require('../constants');


describe('login page feature page', function() {
    this.retries(2);

    it('verify login page title', () => {
        browser.url('/');
        browser.maximizeWindow();
        const title = loginPage.getPageTitle();
        assert.equal(constant.LOGIN_PAGE_TITLE, title, 'Incorrect title')
    });

    it('Verify Sign Up link', () => {
        browser.url('/');
        assert.equal(true, loginPage.isSignUpLinkExist(), 'Sign up link is not present');
    });

    it('Verify login', () => {
        browser.url('/');
        loginPage.doLogin(configData.username, configData.password);
    })
});
