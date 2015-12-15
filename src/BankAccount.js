var Money = require('./Money');
var Statement = require('./Statement');
var Transaction = require('./Transaction');

function BankAccount(dateProviderFn, transactions) {


    function addNewTransaction(money) {
        return transactions.concat(new Transaction(money, dateProviderFn()));
    }

    function deposit(money) {
        var newtransactions = addNewTransaction(money);
        return new BankAccount(dateProviderFn, newtransactions);
    }

    function withdraw(money) {
        var negativeMoney = Money.negate(money);
        var newtransactions = addNewTransaction(negativeMoney);
        return new BankAccount(dateProviderFn, newtransactions);
    }

    function statement() {
        return new Statement(transactions);
    }


    return {
        deposit: deposit,
        withdraw: withdraw,
        statement: statement,
        balance: function() {return Transaction.total(transactions)}
    }
}


module.exports = BankAccount;