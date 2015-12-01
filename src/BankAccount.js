var Money = require('./Money');
var Statement = require('./Statement');
var Transaction = require('./Transaction');

function BankAccount(dateProviderFn) {

    var transactions = [];


    function deposit(money) {
        transactions = _makeNewTransaction(money);
        return Transaction.total(transactions);
    }

    function withdraw(money) {
        var negativeMoney = Money.negate(money);
        transactions = _makeNewTransaction(negativeMoney);
        return Transaction.total(transactions);
    }

    function statement() {
        return new Statement(transactions);
    }

    function _makeNewTransaction(money) {
        return transactions.concat(new Transaction(money, dateProviderFn()));
    }

    return {
        deposit: deposit,
        withdraw: withdraw,
        statement: statement
    }
}


module.exports = BankAccount;