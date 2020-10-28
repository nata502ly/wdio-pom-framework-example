class ElementUtil {
    doClick(element) {
        element.waitForDisplayed();
        element.click()
    }

    doSetValue(element, value) {
        element.waitForDisplayed();
        element.setValue(value);
    }

    doGetText(element) {
        element.waitForDisplayed();
        return element.getText();
    }

    doGetPageTitle(pageTitle) {
        browser.waitUntil(
            () => browser.getTitle() === pageTitle,
            {
                timeout: 10000,
                timeoutMsg: 'expected text to be different after 10s'
            }
        );
        return browser.getTitle()
    }

    doIsDisplayedElement(element) {
        element.waitForDisplayed();
        return element.isDisplayed();
    }
}

module.exports = new ElementUtil();
