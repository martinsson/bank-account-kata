var Transaction = require('./Transaction');

function Statement(transactions) {

    return {
        transactions: transactions || []
    }

}
Statement.print = function (statement) {
    return {
        header: ["date", "debit", "credit"],
        balance: Transaction.total(statement.transactions).amount
    }
}
module.exports = Statement

