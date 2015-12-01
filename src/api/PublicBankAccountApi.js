var money = require('../Money');
var BankAccount = require('../BankAccount')
var Statement = require('../Statement')

function PublicBancAccountApi(dateProviderFn) {

    var account = new BankAccount(dateProviderFn);

    function deposit(amountInEuros) {
        account.deposit(money(amountInEuros));
    }

    function withdraw(amountInEuros) {
        account.withdraw(money(amountInEuros));
    }

    function computeStatement() {
        var statement = Statement.print(account.statement());

        var header = statement.header.join('        ');
        var balance = "Balance " + statement.balance;
        return [header,balance].join('\n');

    }

    return {
        deposit: deposit,
        withdraw: withdraw,
        computeStatement: computeStatement
    }

}

module.exports = PublicBancAccountApi
