const { Builder, By, Key } = require("selenium-webdriver");
const edge = require('selenium-webdriver/edge');
const GoogleHomePage = require('./pages/homePage');
const service = new edge.ServiceBuilder('./drivers/msedgedriver.exe');

(async function helloSelenium() {
    let driver = await new Builder().forBrowser('MicrosoftEdge').setEdgeService(service).build();

    //await driver.manage().setTimeouts({ implicit: 10000 });

    await driver.manage().window().maximize();
    await driver.get('https://google.com');

    // await driver.findElement(By.name('q')).sendKeys("selenium javascript is best");

    let googleHomePage = new GoogleHomePage(driver);

    await googleHomePage.enterTextInSerachBox("selenium javascript is best");
    await googleHomePage.clickGoogleSearchButton();

    await driver.quit();
})();