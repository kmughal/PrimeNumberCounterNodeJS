var chai = require("chai");
var expect = chai.expect;
var GetCharacterCount = require("../GetCharacterCount");

describe("Word Count Functions", function () {

    it("When valid values are passed then it should return the number of times that word present on that array", function () {

        var testArray = [];
        expect(GetCharacterCount(testArray, "Hello")).to.equal(1);

        testArray["Hello"] = 1;
        expect(GetCharacterCount(testArray, "Hello")).to.equal(2);

        testArray["hello"] = 2;
        expect(GetCharacterCount(testArray, "Hello")).to.equal(3);

    });

    it("When null or empty vlaues are passed then error should be thrown", function () {

        expect(function () {
            GetCharacterCount(null, "Hello")
        }).to.throw("Null or empty values are not allowed");

        expect(function () {
            GetCharacterCount([], null)
        }).to.throw("Null or empty values are not allowed");


    });

});