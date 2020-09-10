# QA task

## Instructions
To follow the instructions you need to have python and Node.js
### 1. Clone this repo and navigate into the folder
```
git clone https://github.com/aistyska/automated_tests.git
```
### 2. Prepare the data
Test data are imported by using Python script.
To run the script [Requests](https://requests.readthedocs.io/en/latest/user/quickstart/) are required. 
To install it run this in your terminal:
```
python -m pip install requests
```
You suppose to be in the folder where python script `create_statements.py` is saved, if not navigate into that folder and run the script to insert test data to database:
```
python create_statements.py
```
### 3. Run automated tests
Navigate to the project directory `/tests` and install dependencies
```
npm install
```
Base URL can be changed in `/test/cypress.json` file.
Tests are saved in `/test/cypress/integration` folder.
To run the tests use this command
```
npm run cypress:open
```
and double click on the test `balance.js` in the Cypress Test Runner.