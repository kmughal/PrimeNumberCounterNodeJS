/// <reference path="../../node_modules/chai/chai.js" />
/// <reference path="../../node_modules/sinon/lib/sinon.js" />

var chai = require("chai");
var expect = chai.expect;
var sinon = require("sinon");
var WordCountBuilder = require("../App").WordCountBuilder;
var Q = require("Q");


describe("Word Count Builder Tests", function () {

    it("When calling the builder method then it should return the words occurances with count", function () {

        // I would use a sinon mock but writing this stub was easy and quick for me.

        var rawTextMock = function (normalTextValue) {
            var defer = Q.defer();

            return function () {
                defer.resolve(normalTextValue);
                return defer.promise;
            };
        };
        
        var clearTextMock = function (strText) { return strText; };
        var splitterMock = function (strText) { return String(strText).split(" "); };
        var getCountMock = function (arr, txt) { return 1; }

        var target = WordCountBuilder(rawTextMock("This is a test"), clearTextMock, splitterMock, getCountMock);
        target.then(function (data) {
            expect(Object.keys(data).length).to.equal(3);
            expect(data["This"]).to.equal(1);
            expect(data["is"]).to.equal(1);
            expect(data["a"]).to.equal(1);
            expect(data["test"]).to.equal(1);
        });

    });
});