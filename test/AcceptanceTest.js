var expect = require('chai').expect;

var BankAccount = require('../src/BankAccount');
var money = require('../src/Money');
describe.skip('Acceptance', function() {

    it('statements includes all movements', function() {
        var account = new PublicBankAccount();
        account.deposit(12);
        account.deposit(18);
        account.deposit(1000);
        account.withdraw(300);
        var header;
        expect(account.statement()).to.include(header)

        // ...
    });

    it('balance is the sum of all movements', function() {
    });

    it('the date is present for each transaction', function() {

    });



});