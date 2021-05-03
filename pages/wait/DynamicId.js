const { By } = require('selenium-webdriver');
const BasePage = require('../BasePage');

module.exports = class DynamicId extends BasePage {
  constructor(page, driver) {
    super(driver);
    this.waitPageUrl = page;
  }

  visitPage() {
    this._visit(this.waitPageUrl);
  }

  get buttonDynamicId() {
    return driver.findElement(By.css("button[class*='btn btn-primary']"));
  }
};
