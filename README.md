### Final Project UI Automation Bootcamp
### Davina Scott
Final project for QualityWorks UI Automation Bootcamp

### Test Cases
All test cases can be found withing this project in the root folder in a file called testcases.md

### Dependencies
1. NodeJS v12, v14 or above
3. NPM v6 or above
3. Chrome browser

## Getting Started
Clone the repository & install dependencies
```
$ git clone 
$ npm install
```
# Folder Structure
- *'./test/pageobjects/**/*.js':*  Page object files which include element selectors and functions that are used in tests.
- *'./test/specs/**/*.js':* Test files which include the actual tests.

# Execute tests
Execute all test

```npm run test```

Execute single test suites

```npm run **name of spec file**``` for eg. npm run checkout or npm run search

# Reports
run the command 'allure generate allure-reports && allure open'