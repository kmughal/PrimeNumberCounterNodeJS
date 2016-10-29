var chai = require("chai");
var expect = chai.expect;
var splitter = require("../Splitter");

describe("Splitter Function", function () {

    it("When a valid text is passed then it should return an array which contains that text as an item of the array",
        function () {
            var target = splitter("Khurram Shahzad");
            expect(Object.prototype.toString.call(target) === "[object Array]").to.equal(true);
            expect(target.length).to.equal(2);
        });

    it("When an empty text is passed then it should return an empty array", function () {
        var target = splitter("");
        expect(Object.prototype.toString.call(target) === "[object Array]").to.equal(true);
        expect(target.length).to.equal(0);
    });

    it("when Null / Empty values are passed then it should throw null argument exception",
        function () {

            expect(
                function () {
                    splitter();
                })
                .to.throw("Null or empty values are not allowed");

            expect(
                function () {
                    splitter(null);
                })
                .to.throw("Null or empty values are not allowed");


        }
    );

});