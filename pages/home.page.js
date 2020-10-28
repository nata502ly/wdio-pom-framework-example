const elementUtil = require('../util/elementUtil');
const constant = require('../constants');

class HomePage {
    get header() {return $('h1.private-header__heading')}
    get accountArrow () {return $('#account-menu')}
    get accountName() {return $('.navAccount-accountName')}

    getPageTitle() {
        return elementUtil.doGetPageTitle(constant.HOME_PAGE_TITLE);
    }

    getLoggedInAccountName() {
        elementUtil.doClick(this.accountArrow);
        return elementUtil.doGetText(this.accountName)

    }

    getHeaderText() {
        return elementUtil.doGetText(this.header)
    }

    getAccountName() {
        return elementUtil.doGetText(this.header)

    }
}

module.exports = new HomePage();
