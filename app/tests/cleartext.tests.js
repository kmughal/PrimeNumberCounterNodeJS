var chai = require("chai");
var expect = chai.expect;
// 
var textClearer = require("../ClearText");

describe("Text Clear Function", function () {

    it("Puncation characters should be removed once text clear method is called", function () {
        expect(textClearer("Hello!World")).to.equal("HelloWorld");
        expect(textClearer("hello--world")).to.equal("hello world");
        expect(textClearer("Hello;,World")).to.equal("HelloWorld");
    });

    it("When null is passed then it should return empty string", function () {
         expect(function () {
            textClearer();
        }).to.throw("Null or empty values are not allowed");
    });

});