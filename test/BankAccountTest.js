var expect = require('chai').expect;

var BankAccount = require('../src/BankAccount');
var money = require('../src/Money');
describe('BankAccount', function() {

    it('it has 0 balance when opened', function() {
        var account = new BankAccount();
        expect(account.deposit(money(0))).to.deep.equal(money(0))
    });

    it('deposits increases the balance', function() {
        var account = new BankAccount();
        expect(account.deposit(money(30))).to.deep.equal(money(30))
    });

    it('withdraw decreases the balance', function() {
        var account = new BankAccount();
        account.deposit(money(23));
        expect(account.withdraw(money(20))).to.deep.equal(money(3))
    });


});