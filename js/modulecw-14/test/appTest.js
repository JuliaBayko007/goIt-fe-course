const expect = require('chai').expect;
const hello = require('../app').hello;

describe('hello_func', function(){
    it('show hello', function(){
        const result = hello();
        expect(result).to.be.a('string');
        expect(result).equal('hello');
    })
});

describe('sum array', function(){
    it('empty array', function(){
        const result = sumArray();
        expect(result).to.be.a('number');
        expect(result).equal(0);
        
    })
} )