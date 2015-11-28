var expect = require('chai').expect;

var BankAccount = require('../src/BankAccount');
var money = require('../src/Money');
describe('BankAccount', function() {
    var account = new BankAccount();
    it('it has 0 balance when opened', function() {
        expect(account.balance()).to.deep.equal(money(0))
    });

    it('deposits increases the balance', function() {
        account.deposit(money(30));
        expect(account.balance()).to.deep.equal(money(30))

    });


});