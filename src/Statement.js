var Transaction = require('./Transaction');
var Money = require('./Money')

function Statement(transactions) {

    return {
        transactions: transactions || []
    }

}

function lines(transactions) {
    return transactions.map(function (t) {
        return ["not dte yet", Money.negate(t.money).amount, t.money.amount]
    })
}

Statement.print = function (statement) {
    return {
        header: ["date", "debit", "credit"],
        balance: Transaction.total(statement.transactions).amount,
        lines: lines(statement.transactions)
    }
}
module.exports = Statement

