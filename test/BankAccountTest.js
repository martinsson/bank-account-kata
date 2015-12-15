var expect = require('chai').expect;
var sinon = require('sinon');

var BankAccount = require('../src/BankAccount');
var money = require('../src/Money');
var Statement = require('../src/Statement');
var Transaction = require('../src/Transaction');

describe('BankAccount', function() {
    var account;

    beforeEach(function () {
        account = new BankAccount(sinon.stub(), []);
    })

    it('it has 0 balance when opened', function() {
        //expect(resultAccount).to.deep.equal(money(0))
        expect(account.balance()).to.deep.equal(money(0))
    });

    it('deposits increases the balance', function() {
        var afterDeposit = account.deposit(money(30));
        expect(afterDeposit.balance()).to.deep.equal(money(30))
        //expect(afterDeposit).to.deep.equal(money(30))
    });

    it('withdraw decreases the balance', function() {
        var resultingAccount = account.deposit(money(23)).withdraw(money(20));
        expect(resultingAccount.balance()).to.deep.equal(money(3))
        //expect(account.withdraw(money(20))).to.deep.equal(money(3))
    });

    describe('statement()', function() {
        it('has no transactions to start with', function() {
            var statement = account.statement();
            var emptyStatement = new Statement();
            expect(statement).to.deep.equal(emptyStatement)
        });

        it('contains all transactions made on the account', function() {

            var statement = account.deposit(money(10)).statement();

            // consider :
            var transactionOf10 = new Statement([new Transaction(money(10))]);
            expect(statement).to.deep.equal(transactionOf10)
            // versus
            // expect(statement.transactions).to.have.length(1);
        });


        it('every transaction contains its date', function() {
            var transactionDate = new Date(2015, 11, 30);
            var dateProvider = sinon.stub().returns(transactionDate);
            var account = new BankAccount(dateProvider, []);

            var resultAccount = account.deposit(money(15)).withdraw(money(15));
            var statement = resultAccount.statement();

            // consider :
            var deposit15 = new Transaction(money(15), transactionDate);
            var withDraw15 = new Transaction(money.negate(money(15)), transactionDate);
            expect(statement).to.deep.equal(new Statement([deposit15, withDraw15]))


            // versus
            expect(statement.transactions[0]).to.have.property("date").to.deep.equal(transactionDate);
            expect(statement.transactions[1]).to.have.property("date").to.deep.equal(transactionDate);
        });

    });



});

