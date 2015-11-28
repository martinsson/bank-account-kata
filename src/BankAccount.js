function BankAccount() {

    function balance() {
        return {}
    }

    function deposit(money) {

        return money;

    }

    return {
        balance: balance,

        deposit: deposit
    }
}

module.exports = BankAccount;