var expect = require('chai').expect;

var Statement = require('../src/Statement');
var Transaction = require('../src/Transaction');
var money = require('../src/Money')

function deposit(amount, date) {
    return new Transaction(money(amount), date);
}
function withdraw(amount, date) {
    return new Transaction(money(-amount), date);
}
describe('Statement', function() {

    describe('print', function() {
        var debitColumntIndex = 1;
        var creditColumnIndex = 2;
        var dateColumnIndex = 0;

        it('the header contains date, debit and credit', function() {
            var header = Statement.print(new Statement()).header;
            expect(header).to.deep.equal(["date", "debit", "credit"])
        });

        it('it has the total balance', function() {
            var statement = new Statement([deposit(10), withdraw(7)]);
            var printOut = Statement.print(statement);
            expect(printOut.balance).to.equal(3);
        });

        it('contains all transactions', function() {
            var statement = new Statement([deposit(10), withdraw(2), withdraw(5)]);
            expect(Statement.print(statement).lines).to.have.length(3);
        });

        it('every transaction has a date', function () {
            var statement = new Statement([deposit(10, new Date(2010, 11, 25))]);
            var printOut = Statement.print(statement);
            var firstLine = printOut.lines[0];
            var transactionDate = firstLine[dateColumnIndex];
            expect(transactionDate).to.equal("25/12/2010");
        });

        it('deposits appear in the credit column', function() {
            var statement = new Statement([deposit(10)]);
            var printOut = Statement.print(statement);
            var firstLine = printOut.lines[0];
            expect(firstLine[creditColumnIndex]).to.equal(10);
            expect(firstLine[debitColumntIndex]).to.be.empty;
        });

        it('withdrawals appear in the debit column', function() {
            var statement = new Statement([withdraw(25)]);
            var printOut = Statement.print(statement);
            var firstLine = printOut.lines[0];
            expect(firstLine[creditColumnIndex]).to.be.empty;
            expect(firstLine[debitColumntIndex]).to.equal(25);

        })
    });

});