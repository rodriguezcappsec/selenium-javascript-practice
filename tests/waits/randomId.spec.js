const { Builder, Capabilities, Options } = require('selenium-webdriver');
const DynamicId = require('../../pages/wait/DynamicId');
const { expect } = require('chai');
let chromeDriver = new Builder()
  .withCapabilities(Capabilities.chrome({}))
  .build();
let firefoxDriver = new Builder()
  .withCapabilities(Capabilities.firefox())
  .build();
chromeDriver.manage().setTimeouts({ implicit: 15000 });
firefoxDriver.manage().setTimeouts({ implicit: 15000 });

const executeTest = (browserDriver, name) => {
  let dynamicId;
  describe(`it works in ${name}`, () => {
    before(() => {
      dynamicId = new DynamicId('dynamicid', browserDriver);
    });
    beforeEach(() => {
      dynamicId.visitPage();
    });
    after(() => {
      browserDriver.quit();
    });

    /**
     * Scenario:
     * Record button click.
     * Then execute your test to make sure that ID is not used for button identification.
     */
    it('Ids are not equal', async () => {
      let firstId = await dynamicId.buttonDynamicId.getId();
      driver.navigate().refresh();
      let secondId = await dynamicId.buttonDynamicId.getId();
      expect(firstId).to.be.not.equal(secondId);
    });
  });
};
executeTest(chromeDriver, 'chrome');
executeTest(firefoxDriver, 'firefox');
