const elementUtil = require('../util/elementUtil');
const constant = require('../constants');

class LoginPage {
    //page locators
    get username() {return $('#username')}
    get password() {return $('#password')}
    get loginBtn() {return $('#loginBtn')}
    get signupLink() {return $('[data-key="login.signupLink.cta"]')}

    //page actions
    getPageTitle() {
        return elementUtil.doGetPageTitle(constant.LOGIN_PAGE_TITLE);
    }

    isSignUpLinkExist() {
        return elementUtil.doIsDisplayedElement(this.signupLink);
    }

    doLogin(emailId, password){
        elementUtil.doSetValue(this.username, emailId);
        elementUtil.doSetValue(this.password, password);
        elementUtil.doClick(this.loginBtn);
    }



}

module.exports = new LoginPage();
