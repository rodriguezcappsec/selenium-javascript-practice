const { Builder, Capabilities } = require('selenium-webdriver');
const ClassAttr = require('../../pages/classAttribute/classAttribute');
const { expect } = require('chai');
let chromeDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();
let firefoxDriver = new Builder()
  .withCapabilities(Capabilities.firefox())
  .build();
chromeDriver.manage().setTimeouts({ implicit: 15000 });
firefoxDriver.manage().setTimeouts({ implicit: 15000 });

const executeTest = (browserDriver, name) => {
  let classAttr;
  describe(`Test can ${name}`, () => {
    before(() => {
      classAttr = new ClassAttr('classattr', browserDriver);
    });
    beforeEach(() => {
      classAttr.visitPage();
    });

    /**
     * Scenario:
     * Record primary (blue) button click and press ok in alert popup.
     * Then execute your test to make sure that it can identify the button using btn-primary class.
     */
    it('Can hit ok in alert', async () => {
      await classAttr.buttonClassAttr.click();
      await classAttr.clickAlertOk();
    });
  });
};
executeTest(chromeDriver, 'chrome');
executeTest(firefoxDriver, 'firefox');
