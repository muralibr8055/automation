# Cucumber Axios Gherkin Framework for API Testing

In this project, the BDD Gherkin framework used with [Cucumber](https://cucumber.io/), [axios](https://github.com/axios/axios) and JavaScript to invoke the api and write the tests.


## Installation

### Pre-requisites
- Nodejs

- Visual studio

### npm packages

- axios

- cucumber-js

- cucumber-html-reporter

### Run the below command to install all dependencies

- $npm install


## How to run tests
1. Clone or download this repository
2. Install all the dependencies
3. Run the below command to execute the test cases, by default this will generate the test report
- $npm test

To run the tests without report

- cucumber-js features/ -r steps/


## reporter
Command to run the tests with report

- cucumber-js features/ -r steps/ --format json:report/cucumber_report.json


## Important Notes/Assumptions
- `"type": "module"` in the package.json to indicate it's an ESM project
- `cucumber.js` configuration file and `steps.js` using ESM syntax
- `import` configuration option instead of `require` to load support code
- I have used step_definitions folder to store the step definitions files. i.e steps.js
    Also used api-test.feature file to define the scenario's in Gherkin format.
    Report folder is to store the support files required for reporting.

- Part 1(Automation) of the assignment files are available in the following files
    1. Feature files :- features->api-test.feature
    2. StepDefinitions :- features->step_definitions->steps.js
- Language used :- JavaScript
- Format :- Gherkin format using Cucumber with Axios
- I have used only Given keyword/statements , because I thought there is no need of when. Also Given is     common statement for the API's and it's the same end point we are hitting. So, for the same reason, I have used single feature file and step definitions file. 
- Part 2(Functional Manual Testing) :- These tests are written using Gherkin format and the tests are available in the file functionaltest.feature which is placed in the root directory.
