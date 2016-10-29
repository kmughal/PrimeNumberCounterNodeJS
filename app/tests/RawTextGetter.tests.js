
var chai = require("chai");
var expect = chai.expect;
var RawTextGetter = require("../GetRawText");


describe("GetRawText Getter ", function () {


    it("If an empty Uri is passed then an error must be thrown", function () {
        expect(function () {
            var p = new RawTextGetter();
        }).to.throw("Null or empty values are not allowed");

    });


    it("If Uri is not valid then an error must be thrown", function () {
        expect(function () {
            var p = new RawTextGetter("hello this is a test");
        }).to.throw("Not valid Uri");

    });

    it("If Uri is valid but it is missing a text file then an error should be thrown", function () {

       expect(function () {         
            new RawTextGetter("http://www.loyalbooks.com");
       }).to.throw("File not present to download");
    });

});

