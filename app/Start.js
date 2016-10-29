
var Uri = "text file path",
    Splitter = require("./Splitter"),
    ClearText = require("./ClearText"),
    GetCharacterCount = require("./GetCharacterCount"),
    IsPrime = require("./IsPrime"),
    GetRawText = require("./GetRawText"),
    Builder = require("./App");

console.log("Starting task.");
var start_time = new Date();

var WordCountBuilder = Builder.WordCountBuilder ,
    PrimeCountBuilder = Builder.GetWordsWithPrimeNumberCount;

WordCountBuilder(
    new GetRawText(Uri),
    ClearText,
    Splitter,
    GetCharacterCount).then(function (dResult) {

        console.log("Array >> ", dResult);

        console.log("Prime Count Builder >>");
        var prime_counter_started = new Date();
        PrimeCountBuilder(dResult);

        console.log("Word Count Builder Started >>", start_time);
        console.log("Word Count Builder Ended >>", prime_counter_started);
        console.log("======================================================================");
        console.log("Prime Count Builder Started >>", prime_counter_started);
        console.log("Prime Count Builder Ended >>", new Date());

    });


