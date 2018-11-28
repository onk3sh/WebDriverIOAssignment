
import { defineSupportCode } from 'cucumber';
import owmHomePage from '../pageobjects/owm-home.page';
const request = require('request');

defineSupportCode(function({ Then }) {
    // *** belongs to owm-weather-map-search  feature
    Then(/^I should see all the lables correctly displayed on the page$/, function() {
      owmHomePage.validateAllLabelsOnHomePage().should.equal(true);
    });

    Then(/^I should see the error message on the page$/, function() {
      owmHomePage.getNotFoundErrorMessageText().should.equal('Not found');
    });

    Then(/^I should see that "([^"]*)","([^"]*)" is displayed on the page$/, function(city,countryCode) {
      owmHomePage.clickOnCityLinkInList(city,countryCode);
      owmHomePage.getDefaultCityHeaderText().should.contain(city+','+' '+countryCode);
    });

    Then(/^I should validate that "([^"]*)","([^"]*)" is displayed on the page via REST API$/, function(city,countryCode) {
      owmHomePage.clickOnCityLinkInList(city,countryCode);
      owmHomePage.getDefaultCityHeaderText().should.contain(city+','+' '+countryCode);

      let mainState = owmHomePage.getMainData();
      let pressure = owmHomePage.getPressureData();
      let humidity = owmHomePage.getHumidityData();
      let url = owmHomePage.getRESTAPICallURL(city,countryCode);

      request(url, function(error, response, body){
        let obj = JSON.parse(body);
        obj.weather[0].description.should.contain(mainState);
        humidity.should.contain(obj.main.humidity);
        pressure.should.contain(obj.main.pressure);
      });
    });

});
