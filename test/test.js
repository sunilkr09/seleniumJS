const { describe, test } = require("mocha");
const assert = require('assert');
const { beforeEach } = require("mocha");
const { afterEach } = require("mocha");

const { Builder, By, Key } = require("selenium-webdriver");
const edge = require('selenium-webdriver/edge');
const GoogleHomePage = require('../pages/homePage');
const { doesNotReject } = require("assert");
const service = new edge.ServiceBuilder('./drivers/msedgedriver.exe');

describe("HOOKS", function () {

    let driver = undefined;
    beforeEach(async function () {

        driver = await new Builder().forBrowser('MicrosoftEdge').setEdgeService(service).build();

        //await driver.manage().setTimeouts({ implicit: 10000 });

        await driver.manage().window().maximize();
        await driver.get('https://google.com');
        done();
    });

    test('First test case', async function () {
        let googleHomePage = new GoogleHomePage(driver);

        await googleHomePage.enterTextInSerachBox("selenium javascript is best");
        await googleHomePage.clickGoogleSearchButton();
        assert.equal(1, 1);
        done();
    });

    afterEach(async function () {
        await driver.quit();
        done();
    });
});