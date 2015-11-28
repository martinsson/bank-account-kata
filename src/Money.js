function Money(amountInEuros) {

    return {
        amount: amountInEuros,
    }

}
Money.add = function(money1, money2) {
    return Money(money1.amount + money2.amount);
}

module.exports = Money;