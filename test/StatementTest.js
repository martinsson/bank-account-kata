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

        it('contains all transactions');
    });

});