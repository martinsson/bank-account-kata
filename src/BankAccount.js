var Money = require('./Money');
var Statement = require('./Statement');
var Transaction = require('./Transaction');

function BankAccount(dateProviderFn, transactions) {


    function deposit(money) {
        var newtransactions = _addNewTransaction(money);
        return new BankAccount(dateProviderFn, newtransactions);
    }

    function withdraw(money) {
        var negativeMoney = Money.negate(money);
        var newtransactions = _addNewTransaction(negativeMoney);
        return new BankAccount(dateProviderFn, newtransactions);
    }

    function statement() {
        return new Statement(transactions);
    }

    function balance() {
        return Transaction.total(transactions)
    }

    function _addNewTransaction(money) {
        var today = dateProviderFn();
        var newTransaction = new Transaction(money, today);
        return transactions.concat(newTransaction);
    }


    return {
        deposit: deposit,
        withdraw: withdraw,
        statement: statement,
        balance: balance
    }
}


module.exports = BankAccount;