var expect = require('chai').expect;

var BankAccount = require('../src/BankAccount');
var money = require('../src/Money');
var Statement = require('../src/Statement');

describe('BankAccount', function() {
    var account;

    beforeEach(function () {
        account = anAccount();
    })

    it('it has 0 balance when opened', function() {
        expect(account.deposit(money(0))).to.deep.equal(money(0))
    });

    it('deposits increases the balance', function() {
        expect(account.deposit(money(30))).to.deep.equal(money(30))
    });

    it('withdraw decreases the balance', function() {
        account.deposit(money(23));
        expect(account.withdraw(money(20))).to.deep.equal(money(3))
    });

    describe('statement()', function() {
        it('lists all movements', function() {
            var statement = account.statement();
            expect(statement).to.deep.equal(new Statement())
        });
    });



});

function anAccount() {
    return new BankAccount();
}