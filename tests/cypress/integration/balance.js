import StatementsPage from "../objects/statementsPage";
const statementsPage = new StatementsPage()

describe('Balance before and Balance after', () => {

    let testData = [
        {
            testCase: 'Check starting/ending balance when only one operation (withdrawal) happened',
            account: 'minus01',
            operations: 1,
            balanceBefore: '0.00',
            balanceAfter: -367.99
        },
        {
            testCase: 'Check starting/ending balance when only one operation (deposit) happened.',
            account: 'plius01',
            operations: 1,
            balanceBefore: '0.00',
            balanceAfter: 0.99
        },
        {
            testCase: 'Check starting/ending balance after two operations (withdrawal, deposit).',
            account: 'accm01',
            operations: 2,
            balanceBefore: '0.00',
            balanceAfter: 0.00
        },
        {
            testCase: 'Check starting/ending balance after two operations (withdrawal, deposit registered with previous date). Balance after is positive.',
            account: 'accm05',
            operations: 2,
            balanceBefore: '0.00',
            balanceAfter: 1111.11
        },
        {
            testCase: 'Check starting/ending balance after two operations (withdrawal, deposit registered with previous date). Balance after is negative.',
            account: 'accm06',
            operations: 2,
            balanceBefore: '0.00',
            balanceAfter: -293.77
        },
        {
            testCase: 'Check starting/ending balance after two operations (deposit, withdrawal). Balance after is positive.',
            account: 'accp03',
            operations: 2,
            balanceBefore: '0.00',
            balanceAfter: 366.69
        },
        {
            testCase: 'Check starting/ending balance after two operations (deposit, withdrawal registered with previous date). Balance after is positive.',
            account: 'accp06',
            operations: 2,
            balanceBefore: '0.00',
            balanceAfter: 465.76
        },
        {
            testCase: 'Check starting/ending balance after two operations (deposit, withdrawal registered with previous date). Balance after is negative.',
            account: 'accp05',
            operations: 2,
            balanceBefore: '0.00',
            balanceAfter: -5.19
        },
        {
            testCase: 'Check starting/ending balance after a few operations (withdrawal, deposit and deposit registered with previous date (1 second earlier than the first inserted operation). Balance after is positive.',
            account: 'n_acc02',
            operations: 3,
            balanceBefore: '0.00',
            balanceAfter: 114.27
        },
        {
            testCase: 'Check starting/ending balance after withdrawal operations. Every operation registered with previous date.',
            account: 'n_acc03',
            operations: 4,
            balanceBefore: '0.00',
            balanceAfter: -2208.38
        },
        {
            testCase: 'Check starting/ending balance when difference between two operations is one second and one operation was registered with previous date.',
            account: 't_acc09',
            operations: 2,
            dateFrom: '2020-03-23 11:44:00',
            dateTo: '2020-03-23 11:44:59',
            balanceBefore: 120.25,
            balanceAfter: 214.42
        },
        {
            testCase: 'Check starting/ending balance of one operation when a few operations was registered with previous date.',
            account: 'n_acc06',
            operations: 1,
            dateFrom: '2020-04-30 23:59:00',
            dateTo: '2020-05-01 23:59:59',
            balanceBefore: -125.15,
            balanceAfter: -125.16
        },
        {
            testCase: 'Check starting/ending balance of one operation which is the first by timestamp but was registered the last for that account',
            account: 'n_acc05',
            operations: 1,
            dateFrom: '2019-12-12 12:00:00',
            dateTo: '2019-12-12 13:00:00',
            balanceBefore: '0.00',
            balanceAfter: 215.89
        },
        {
            testCase: 'Check starting/ending balance of two operations (withdrawal and deposit) where the same amount of money were used. Withdrawal is the first by timestamp but was registered the last for that account',
            account: 't_acc07',
            operations: 2,
            dateFrom: '2020-04-06 08:25:50',
            dateTo: '2020-04-07 10:33:13',
            balanceBefore: '0.00',
            balanceAfter: '0.00'
        }
    ]


    beforeEach(() => {
        cy.visit('/statements')
    })


    testData.forEach(data => {
        it(data.testCase, () => {
            statementsPage.getNameField().type(data.account)
            if('dateFrom' in data) {
                statementsPage.getDateFromField().type(data.dateFrom)
            }
            if ('dateTo' in data) {
                statementsPage.getDateToField().type(data.dateTo)
            }
            statementsPage.getSearchButton().click()
            statementsPage.getOperationsCount().should('have.length', data.operations)
            statementsPage.getBalanceBefore().should('contain', `Balance before: ${data.balanceBefore} EUR`)
            statementsPage.getBalanceAfter().should('contain', `Balance after ${data.balanceAfter} EUR`)
        })
    })

})
