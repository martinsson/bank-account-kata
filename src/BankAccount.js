var Money = require('./Money');
var Statement = require('./Statement');
function BankAccount() {

    var transactions = []
    function deposit(money) {
        transactions = transactions.concat(money);
        return transactions.reduce(Money.add, new Money(0));
    }

    function withdraw(money) {
        transactions = transactions.concat(Money.negate(money));
        return transactions.reduce(Money.add, new Money(0));
    }

    function statement() {

        return new Statement();

    }

    return {
        deposit: deposit,
        withdraw: withdraw,
        statement: statement
    }
}

module.exports = BankAccount;