### Technology/Framework Used
* Playwright node.js library with TypeScript
* Page Object Model design pattern used to automate the UI tests
* Playwright APIRequestContext methods have been used to automate the REST API tests

### Reason behind the chosen framework & pattern
* Open source library
* UI & API tests suppported by the single library
* Fast & easy to setup
* Reduces boilerplate code
* Built-in auto wait feature makes the tests more stable
* Supports Chromium, Firefox & WebKit browsers with a single API
* Stable & fast in terms of execution.
* Extensive documentation & growing community support.

### Steps to setup & execute the tests
1. Clone the project to local directory
2. Open command prompt or terminal and navigate to the project root folder
3. Install Node from https://nodejs.org/.
4. Run the below command in command prompt or terminal to setup playwright:
    * **npm install**

        _Or_ 
    * **npm install --save-dev playwright**
5. Next, run the below command to install the playwright browsers:

    **npx playwright install**
6. Now, to execute the UI tests, run the below command:

    **npm run tests:ui**
7. To execute the API tests, run the below command:

    **npm run tests:api**
8. To view the execution reports after every successful test execution, run the below command:

    **npx playwright show-report**

### Next possible steps for improvement
* Introduce data-driven tests by using external data source such as csv/excel etc.
* Optimize further by using features such as Fixtures, Hooks, Annotations etc. wherever possible.
* Enhance reporting by integrating 3rd party reporting such as Allure or Extent Report.



