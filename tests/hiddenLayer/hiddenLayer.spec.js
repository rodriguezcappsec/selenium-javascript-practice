const { Builder, Capabilities } = require('selenium-webdriver');
const HiddenLayers = require('../../pages/hiddenLayers/hiddenLayers');
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
  let hiddenLayers;
  describe(`Test can running on ${name}`, () => {
    before(() => {
      hiddenLayers = new HiddenLayers('hiddenlayers', browserDriver);
    });
    beforeEach(() => {
      hiddenLayers.visitPage();
    });
    after(() => {
      browserDriver.close();
    });
    /**
     * Scenario:
     * Record primary (blue) button click and press ok in alert popup.
     * Then execute your test to make sure that it can identify the button using btn-primary class.
     */
    it('Cannot hit green button twice ', async () => {
      await hiddenLayers.buttonHiddenLayer.click();
      await hiddenLayers.clickHiddenGreenButton();
      await hiddenLayers.greenClickDuplicationWarning.warningElement.isDisplayed();
      let warningMessage = await hiddenLayers.greenClickDuplicationWarning.warningElement.getText();
      expect(warningMessage).to.be.equal(
        hiddenLayers.greenClickDuplicationWarning.message
      );
    });
  });
};
executeTest(chromeDriver, 'chrome');
executeTest(firefoxDriver, 'firefox');
