const { By } = require('selenium-webdriver');
const BasePage = require('../BasePage');

module.exports = class HiddenLayers extends BasePage {
  constructor(page, driver) {
    super(driver);
    this.hiddenLayersPageUrl = page;
  }

  visitPage() {
    this._visit(this.hiddenLayersPageUrl);
  }

  async clickHiddenGreenButton() {
    return await driver.executeScript(
      `document
        .querySelector("div[style='z-index: 1;'] > button[id='greenButton']")
        .click()`
    );
  }

  get buttonHiddenLayer() {
    return driver.findElement(By.css("button[id='greenButton']"));
  }

  get greenClickDuplicationWarning() {
    return {
      message:
        'User can not click green button in the current application state!',
      warningElement: driver.findElement(By.css("p[class='bg-warning']")),
    };
  }
};
