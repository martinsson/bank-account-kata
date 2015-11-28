function Money(amountInEuros) {

    return {
        amount: amountInEuros,
    }
}

Money.add = function(money1, money2) {
    return Money(money1.amount + money2.amount);
}

Money.negate = function (money) {
    return Money(0 - money.amount);
}

module.exports = Money;