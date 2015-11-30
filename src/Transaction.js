var Money = require('./Money');


function Transaction(money, date) {

    return {
        money: money,
        date: date
    }
}

Transaction.total = function (transactions) {
    return transactions.map(getMoney).reduce(Money.add, noMoney());

}
function noMoney() {
    return new Money(0);
}
function getMoney(t) {
    return t.money
}

module.exports = Transaction
