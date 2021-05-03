require('chromedriver');
require('geckodriver');
const { baseUrl } = require('./contants');

module.exports = class BasePage {
  constructor(driver) {
    global.driver = driver;
  }

  /**
   * Visit url
   */
  async _visit(url) {
    await driver.get(`${baseUrl}${url}`);
  }
};
