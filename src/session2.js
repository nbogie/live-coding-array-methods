import { simpsonsEpisodes } from "../data/simpsons.js";

// task: find first number under 8
function isLessThan8(givenNumber) {
    return givenNumber < 8;
}

function isEven(givenNumber) {
    return givenNumber % 2 === 0;
}

const myNumbers = [10, 7, 20, 4, 23, 18, 2, 35, 45, 3, 45];

function isGreaterThan45(givenNumber) {
    console.log("in tomi's function.  got given ", givenNumber);
    return givenNumber > 45;
}
function isGreaterThan18(n) {
    return n > 18;
}
const isOdd = (n) => n % 2 !== 0;

// const answer1 = myNumbers.find(isLessThan8);
const answer2 = myNumbers.filter(isGreaterThan18).find(isOdd);
console.log(answer2);

function episodeHasShortName(epObj) {
    return epObj.name.length < 20;
}

console.log(simpsonsEpisodes.filter(episodeHasShortName));
