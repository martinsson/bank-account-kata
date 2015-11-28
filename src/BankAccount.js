var Money = require('./Money');

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

    return {
        deposit: deposit,
        withdraw: withdraw
    }
}

module.exports = BankAccount;