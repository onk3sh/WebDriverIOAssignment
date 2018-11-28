# WebDriverIOAssignment
Cucumber - BDD assignment using WebDriver IO

## Pre-requisite
For Selenium standalone to install and execute successfully, please execute the following command:
```
setx NODE_TLS_REJECT_UNAUTHORIZED 0
```
This is required from selenium-standalone perspective.

## Installation
Please execute the following code snippet before executing the tests
```
npm install
```
This command should take care of all the depencies. 
If not and you still encounter any error, please install 'yarn'

## Test Execution
All tests can be executed via the command
```
npm run test
```
To run any selective tests, we can mark the tests via specific tags and run them using the command:
```
yarn run wdio -- --cucumberOpts.tagExpression=@sanity
```

## Test Reporting
By default, there are multiple reporters configured in the framework and you can use any of the following:

### Allure
Please install the allure-commandline tool using the command first using the command:
```
npm install -g allure-commandline
```

To generate and see the test reports, please execute the following command:
```
npm run allure-report
```

### Junit
Please install the junit-viewer line using the command first using the command:
```
npm install -g junit-viewer
```

To generate and see the test reports, please execute the following command:
```
npm run junit-report
```

## Cleanup
There can be some stray references to the chromedriver that can accumalate over time and are visible in the task manager.
Please execute the following command via an administrator command prompt. 
Do match the name of the stary proccess before executing.
```
TASKKILL /IM 2.43-x64-chromedriver /F
```