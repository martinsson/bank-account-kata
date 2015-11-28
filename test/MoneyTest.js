var expect = require('chai').expect;

var money = require('../src/Money');
describe('Money', function() {


    it('negate', function() {
        expect(money.negate(money(12))).to.deep.equal(money(-12))
    });

    it('add negative', function() {
        expect(money.add(money(-3), money(5))).to.deep.equal(money(2))
        expect(money.add(money(5), money(-3))).to.deep.equal(money(2))
    });
});