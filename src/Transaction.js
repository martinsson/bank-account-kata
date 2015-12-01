var Money = require('./Money');


function Transaction(money, date) {

    return {
        money: money,
        date: date
    }
}

Transaction.total = function (transactions) {
    return transactions.map(_getMoney).reduce(Money.add, _noMoney());

}
function _noMoney() {
    return new Money(0);
}
function _getMoney(t) {
    return t.money
}

module.exports = Transaction
