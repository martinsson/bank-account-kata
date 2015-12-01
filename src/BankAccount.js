var Money = require('./Money');
var Statement = require('./Statement');
var Transaction = require('./Transaction');

function BankAccount(dateProviderFn) {

    var transactions = [];


    function deposit(money) {
        var date = dateProviderFn();
        transactions = transactions.concat(new Transaction(money, date));
        return Transaction.total(transactions);
    }

    function withdraw(money) {
        var negativeMoney = Money.negate(money);
        transactions = transactions.concat(new Transaction(negativeMoney));
        return Transaction.total(transactions);
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