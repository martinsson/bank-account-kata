var Transaction = require('./Transaction');
var Money = require('./Money')
var dateformat = require('dateformat');

function Statement(transactions) {

    return {
        transactions: transactions || []
    }

}

function _lines(transactions) {
    return transactions.map(function (t) {
        var date = dateformat(t.date, "dd/mm/yyyy");
        var transactionAmount = t.money.amount;

        // TODO here we really need some sort of polymorphic dispatch, or a tree visitor?
        var creditAmount = transactionAmount >0 ? transactionAmount: "";
        var debitAmount = transactionAmount <0 ? Money.negate(t.money).amount : "";
        return [date, debitAmount, creditAmount]
    })
}

Statement.print = function (statement) {
    return {
        header: ["date", "debit", "credit"],
        balance: Transaction.total(statement.transactions).amount,
        lines: _lines(statement.transactions)
    }
}

module.exports = Statement

