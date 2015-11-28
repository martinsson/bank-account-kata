var expect = require('chai').expect;

var BankAccount = require('../src/BankAccount');
var money = require('../src/Money');
describe('BankAccount', function() {
    var account = new BankAccount();

    it('it has 0 balance when opened', function() {
        var balance = account.deposit(money(0));
        expect(balance).to.deep.equal(money(0))
    });

    it('deposits increases the balance', function() {
        var balance = account.deposit(money(30));
        expect(balance).to.deep.equal(money(30))

    });


});