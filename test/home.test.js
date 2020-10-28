const loginPage = require('../pages/login.page.js');
const homePage = require('../pages/home.page.js');
const configData = require('../config');
const constant = require('../constants');

describe('Home page feature test', () => {
    it('verify home page title', ()=> {
        browser.url('/');
        browser.maximizeWindow();
        loginPage.doLogin(configData.username, configData.password);
        const pageTitle = homePage.getPageTitle();
        assert.equals(pageTitle, constant.HOME_PAGE_TITLE, 'Title is not found');
    })
});


