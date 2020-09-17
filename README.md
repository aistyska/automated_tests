# QA task

## Instructions
To follow the instructions you need to have python and Node.js
### 1. Clone this repo and navigate into the folder
```
git clone https://github.com/aistyska/automated_tests.git
```
### 2. Prepare the data
Test data are imported by using Python scripts.
To run the scripts [Requests](https://requests.readthedocs.io/en/latest/user/quickstart/) are required. 
To install it run this in your terminal:
```
python -m pip install requests
```
To run Python script which inserts a few statements at the same time [Aiohttp](https://docs.aiohttp.org/en/stable/) is required.
To install it run this:
```
pip install aiohttp
```
You suppose to be in the folder where python scripts `create_statements.py` and `create_statements_async.py` are saved, if not navigate into that folder and run the script to insert test data to database:
```
python create_statements.py
```
If you want statements to be inserted concurrently run this:
```
python create_statements_async.py
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