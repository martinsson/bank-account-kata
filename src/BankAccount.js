var Money = require('./Money');
var Statement = require('./Statement');
var Transaction = require('./Transaction');

function BankAccount() {

    var moneyList = []
    var transactions = [];

    function deposit(money) {
        transactions = transactions.concat(new Transaction(money));

        return transactions.map(function (t) { return t.money}).reduce(Money.add, new Money(0));
    }

    function withdraw(money) {
        transactions = transactions.concat(new Transaction(Money.negate(money)));
        return transactions.map(function (t) { return t.money}).reduce(Money.add, new Money(0));
    }

    function statement() {

        return new Statement(transactions);

    }


    return {
        deposit: deposit,
        withdraw: withdraw,
        statement: statement
    }
}

module.exports = BankAccount;