var expect = require('chai').expect;
var sinon  = require('sinon');
require('approvals')
    .mocha();
var PublicBankAccountApi = require('../src/api/PublicBankAccountApi');
var money = require('../src/Money');
describe('Acceptance', function () {

    it('statements includes all movements', function () {
        var dateForAllTransactions = new Date(2011, 01, 20);
        var dateProviderFn = sinon.stub().returns(dateForAllTransactions)
        dateProviderFn.onSecondCall().returns(new Date(2012, 01, 01));
        dateProviderFn.onThirdCall().returns(new Date(2012, 11, 25));
        var account = new PublicBankAccountApi(dateProviderFn);
        account.deposit(12);
        account.deposit(18);
        account.withdraw(300);

        var statement = account.computeStatement();
        this.verify(statement);

        //var nl = "\n";
        //expect(statement).to.equal(
        //    "date        debit        credit" + nl +
        //    "20/02/2011               12" + nl +
        //    "20/02/2011               18" + nl +
        //    "20/02/2011  300" + nl +
        //    nl +
        //    "Balance -270"
        //)
        //
        // ...
    });

    //it('header', function () {
    //
    //    var header;
    //    //expect(account.statement()).to.include(header)
    //});
    //it('balance is the sum of all movements', function () {
    //});
    //
    //it('the date is present for each transaction', function () {
    //
    //});


});