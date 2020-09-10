class StatementsPage {

    getSearchButton(){
        return cy.get('button[type=submit]')
    }

    getNameField() {
        return cy.get('#search_account_id')
    }

    getDateFromField() {
        return cy.get('input[name="from_date"]')
    }

    getDateToField() {
        return cy.get('input[name="to_date"]')
    }

    getOperationsCount() {
        return cy.get('tbody').find('tr')
    }

    getBalanceBefore() {
        return cy.get('.container').last()
    }

    getBalanceAfter(){
        return cy.get('div[class=col-sm]')
    }

}

export default StatementsPage
