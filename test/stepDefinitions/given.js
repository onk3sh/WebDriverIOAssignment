
import { defineSupportCode } from 'cucumber';
import owmHomePage from '../pageobjects/owm-home.page';

defineSupportCode(function({ Given }) {

  // *** belongs to open-weather-map feature
  Given(/^I am on the Open Weather Maps home page$/, function() {
    owmHomePage.open();     // navigating to login page
    browser.getTitle().should.contain("OpenWeatherMap");
  });

});
