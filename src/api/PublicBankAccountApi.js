var money = require('../Money');
var BankAccount = require('../BankAccount')
var Statement = require('../Statement')

function formatLine(line) {
    return line[0] + "  " + line[1] + "             " + line[2]
}
function PublicBancAccountApi(dateProviderFn) {

    var account = new BankAccount(dateProviderFn, []);

    function deposit(amountInEuros) {
        account = account.deposit(money(amountInEuros));
    }

    function withdraw(amountInEuros) {
        account = account.withdraw(money(amountInEuros));
    }

    function computeStatement() {
        var statement = Statement.print(account.statement());

        var header = statement.header.join('        ');
        var lines = statement.lines.map(formatLine).join('\n')
        var balance = "Balance " + statement.balance;
        return [header,lines, "", balance].join('\n');

    }

    return {
        deposit: deposit,
        withdraw: withdraw,
        computeStatement: computeStatement
    }

}

module.exports = PublicBancAccountApi
