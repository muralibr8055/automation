# Cucumber Axios Gherkin Framework for API Testing

In this project, the BDD framework used is [Cucumber](https://cucumber.io/), [axios](https://github.com/axios/axios) is used to invoke the api.


## Installation

### Pre-requisites
Nodejs
Visual studio

### npm packages

axios
cucumber-js
cucumber-html-reporter.

or run the below command to install all dependencies

------bash
$npm install
----------

## Test

To run the test cases use the below command 
-----bash
$npm test
-----
To run the test without report

cucumber-js features/ -r steps/
------

## reporter
cucumber-js features/ -r steps/ --format json:report/cucumber_report.json

## Explanations
I have used step_definitions folder to store the step definitions files. i.e steps.js
Also used api-test.feature file to define the scenario's in Gherkin format.
Report folder is for the keep the report related files.


## Important Notes
- `"type": "module"` in the package.json to indicate it's an ESM project
- `cucumber.js` configuration file and `steps.js` using ESM syntax
- `import` configuration option instead of `require` to load support code

- Part 1(Automation) of the assignment files are available in the following files
- Feature files :- features->api-test.feature
- StepDefinitions :- features->step_definitions->steps.js
- Language used :- JavaScript
- Format :- Gherkin format using Cucumber with Axios

- Part 2(Functional Manual Testing) :- These tests are written using Gherkin format and the tests are available in the file functionaltest.feature which is placed in the root folder.

