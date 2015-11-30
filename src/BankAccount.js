var Money = require('./Money');
var Statement = require('./Statement');
var Transaction = require('./Transaction');

function BankAccount(dateProviderFn) {

    var transactions = [];


    function deposit(money) {
        var date = dateProviderFn();
        transactions = transactions.concat(new Transaction(money, date));
        return transactions.map(getMoney).reduce(Money.add, noMoney());
    }

    function withdraw(money) {
        var negativeMoney = Money.negate(money);
        transactions = transactions.concat(new Transaction(negativeMoney));
        return transactions.map(getMoney).reduce(Money.add, noMoney());
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


function noMoney() {
    return new Money(0);
}
function getMoney(t) {
    return t.money
}


module.exports = BankAccount;