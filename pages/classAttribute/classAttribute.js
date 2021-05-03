const { By } = require('selenium-webdriver');
const BasePage = require('../BasePage');

module.exports = class classAttribute extends BasePage {
  constructor(page, driver) {
    super(driver);
    this.classAttrPageUrl = page;
  }

  visitPage() {
    this._visit(this.classAttrPageUrl);
  }

  clickAlertOk() {
    let alert = driver.switchTo().alert();
    return alert.accept();
  }

  get buttonClassAttr() {
    return driver.findElement(By.css("button[class*='btn-primary']"));
  }
};
