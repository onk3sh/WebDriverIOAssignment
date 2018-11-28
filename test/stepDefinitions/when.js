
import { defineSupportCode } from 'cucumber';
import owmHomePage from '../pageobjects/owm-home.page';

defineSupportCode(function({ When }) {

  When(/^The page gets loaded successfully$/, function() {
    owmHomePage.waitForHomePageToLoad();
  });

  When(/^I enter "([^"]*)" into the city search box$/, function(arg1) {
    owmHomePage.setCity(arg1);
    owmHomePage.citySearchTextBox.getValue().should.equal(arg1);
  });

  When(/^I click the search button$/, function() {
    owmHomePage.citySearchButton.click();
  });

});
