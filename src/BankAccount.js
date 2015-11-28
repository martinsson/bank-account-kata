var Money = require('./Money');

function BankAccount() {

    var transactions = []
    function balance() {
        return {}
    }

    function deposit(money) {

        transactions = transactions.concat(money);
        //function sum(moneyBefore, moneyAfter) {
        //    return moneyBefore.add(moneyAfter);
        //}

        return transactions.reduce(Money.add, new Money(0));

    }

    return {
        balance: balance,

        deposit: deposit
    }
}

module.exports = BankAccount;