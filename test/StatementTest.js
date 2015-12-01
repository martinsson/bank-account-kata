var expect = require('chai').expect;

var Statement = require('../src/Statement');
var Transaction = require('../src/Transaction');
var money = require('../src/Money')

function deposit(amount) {
    return new Transaction(money(amount));
}
function withdraw(amount) {
    return new Transaction(money(-amount));
}
describe('Statement', function() {

    describe('print', function() {
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

        it('every transaction has a date');
        it('deposits appear in the credit column', function() {
            var statement = new Statement([deposit(10)]);
            var printOut = Statement.print(statement);
            var creditColumnIndex = 2;
            expect(printOut.lines[0][creditColumnIndex]).to.equal(10);
        });

        it('withdrawals appear in the debit column', function() {
            var statement = new Statement([withdraw(25)]);
            var printOut = Statement.print(statement);
            var debitColumntIndex = 1;
            expect(printOut.lines[0][debitColumntIndex]).to.equal(25);

        })
    });

});