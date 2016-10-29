
var Q = require("Q"),
    http = require("http"),
    path = require('path'),
    urlValidator = require("valid-url"),
    fs = require("fs");


function GetRawText(Uri) {

    if (typeof Uri === "undefined" || Uri === null) {
        throw new Error("Null or empty values are not allowed")
    }


    if (!urlValidator.isHttpUri(Uri)) {
        throw new Error("Not valid Uri");
    }

    if (path.extname(Uri).toLowerCase() !== ".txt") {
        throw new Error("File not present to download");
    }

    var defer = Q.defer() ,
        result = "" ,
        getter = http.get(Uri);

    return function () {

        getter.on("response", response);
        function response(res) {
            res.on("data", cb);
            function cb(chunker) {
                result += String(chunker);
            }

            res.on("end", ecb);
            function ecb() {
                defer.resolve(result);
            }
        }
        // return
        return defer.promise;
    };
}


module.exports = GetRawText;