const { Key, until } = require("selenium-webdriver");
const { By } = require("selenium-webdriver/lib/by");

class GoogleHomePage {
    constructor(driver) {
        this.driver = driver;
    }

    async enterTextInSerachBox(str) {
        //await this.driver.wait(until.elementsLocated(By.name('q')), 30000);
        await this.driver.findElement(By.name('q')).sendKeys(str);
    }

    async clickGoogleSearchButton() {
        await this.driver.findElement(By.xpath('(//*[@value="Google Search"])[2]')).click();
    }
}

module.exports = GoogleHomePage;