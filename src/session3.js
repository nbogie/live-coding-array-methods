const { findSourceMap } = require("module");

// task: find first number under 8
function isLessThan8(givenNumber) {
    return givenNumber < 8;
}

function isEven(givenNumber) {
    return givenNumber % 2 === 0;
}

function isGreaterThan45(givenNumber) {
    console.log("in tomi's function.  got given ", givenNumber);
    return givenNumber > 45;
}
function isGreaterThan18(n) {
    return n > 18;
}
function isOdd(n) {
    return n % 2 !== 0;
}

function episodeHasShortName(epObj) {
    return epObj.name.length < 20;
}

function lessThan50(n) {
    console.log("in function lessThan50", n);
    return n < 50;
}
const myNumbers = [10, 7, 20, 4, 23, 18, 2, 35, 45, 3, 45];
function lessThan4(n) {
    return n < 4;
}

if (myNumbers.some(lessThan4)) {
    console.log("CONGRATS SOME NUMS PASSED THE TEST");
} else {
    console.log("💩");
}

//callback function: a function F which you pass to another function G: so that G can call F.

//Task: are ALL of the numbers less than 50? true or false?
// best method to use: "every"
//can also use: "filter" then "count".
