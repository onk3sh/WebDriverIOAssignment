import Page from './page'
let request = require('request');

class HomePage extends Page {

    /**
    * define elements
    */

    get headerText ()     { return browser.element("//h2[@class='jumbotron__title']"); }
    get defaultCityHeaderText() { return browser.element("//h2[@class='weather-forecast-hourly-graphic__header']")}
    get allPageLabels() {return ['Wind','Cloudiness','Pressure','Humidity','Sunrise','Sunset','Geo Chords'] }
    get allTabLables() { return ['main','daily','hourly','chart','map']}
    get citySearchTextBox() { return browser.element("//div[@class='form-group search-cities__block']//input[@id='q']") }
    get citySearchButton() {return browser.element("//form[@id='searchform']//button[@type='submit']") }
    get widgetCityName() { return browser.element("//h2[@class='weather-widget__city-name']") }
    get forecastCityName() { return browser.element("//h2[@class='weather-widget__city-name']") }
    /**
     * Weather data-
     * main, humidity, temperature, pressure, wind, visibility etc
     */
    get mainWidgetText(){return browser.element("//div[@id='weather-widget']//p[@class='weather-widget__main']") }
    get windWidgetText() {return browser.element("//div[@id='weather-widget']//td[@id='weather-widget-wind']")}
    get pressureWidgetText() {return browser.element("//div[@id='weather-widget']//tr[3]")}
    get humidityWidgetText() {return browser.element("//div[@id='weather-widget']//tr[4]")}
    /**
     * REST API Key
     */
    get apiKeyREST() {return '797f80e69a9fddafea8e7efa73f08dcf'}

    /**
     * define or overwrite page methods
     */
    open () {
        super.open('https://openweathermap.org/') 
        browser.pause(2000);
    }

    waitForHomePageToLoad () {
      if(!this.headerText.isVisible()){
        this.headerText.waitForVisible(3000);
      }
    }

    getHeaderText(){
        return this.headerText.getText();
    }

    getDefaultCityHeaderText(){
        if(!this.defaultCityHeaderText.isVisible()){
            this.defaultCityHeaderText.waitForVisible(3000);
          }
        return this.defaultCityHeaderText.getText();
    }

    validateAllLabelsOnHomePage(){
        let arr = this.allPageLabels;
        let arr2 = this.allTabLables;
        let res, i;
        let len = arr.length
        for(i= 0; i<len; i++){
            if(browser.isVisible("//td[contains(text(),'"+arr[i]+"')]") && browser.isVisible("//a[@id='tab-"+arr2[i]+"']"))
                res = true;
            else
                res = false;
                break;
        }

        if(browser.isVisible("//div[@class='form-group search-cities__block']//input[@id='q']") && browser.isVisible("//form[@id='searchform']//button[@type='submit']"))
            res = true;
        else
            res = false;
        return res;
    }

    setCity(city){
        this.citySearchTextBox.setValue(city);
    }

    getNotFoundErrorMessageText(){
        browser.pause(2000);
        let error = browser.element("//*[@id='forecast_list_ul']//div[@class='alert alert-warning']");
        let close = browser.element("//*[@id='forecast_list_ul']//div[@class='alert alert-warning']//a[@class='close']")
        if(!error.isVisible){
            error.waitForVisible(5000);
        }
        else if(!close.isEnabled){
            close.waitForEnabled(5000);
        }
        let msg = error.getText().substr(1);
        return msg.replace(/\n/g,'');
    }

    clickOnCityLinkInList(city,countryCode){
        browser.pause(2000);
        browser.element("//div[@id='forecast-list']//div//a[contains(text(),'"+city+", "+countryCode+"')]").click();
    }

    getWidgetCityNameText(){
        this.widgetCityName.getText();
    }

    getForecastCityNameText(){
        this.forecastCityName.getText();
    }

    getRESTAPICallURL(city,countryCode){
        let apiKey = this.apiKeyREST;
        let apiURL =  "http://api.openweathermap.org/data/2.5/weather?q="+city+","+countryCode+"&appid="+apiKey;
        return apiURL;
    }

    getWindData(){
        if(!this.windWidgetText.isVisible()){
            this.windWidgetText.waitForVisible(3000);
        }
        return this.windWidgetText.getText();
    }

    
    getMainData(){
        if(!this.mainWidgetText.isVisible()){
            this.mainWidgetText.waitForVisible(3000);
        }
        return this.mainWidgetText.getText();
    }

    
    getPressureData(){
        if(!this.pressureWidgetText.isVisible()){
            this.pressureWidgetText.waitForVisible(3000);
        }
        return this.pressureWidgetText.getText();
    }

    
    getHumidityData(){
        if(!this.humidityWidgetText.isVisible()){
            this.humidityWidgetText.waitForVisible(3000);
        }
        return this.humidityWidgetText.getText();
    }
}

export default new HomePage()