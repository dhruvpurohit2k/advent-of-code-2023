const fs = require("fs");

let file = fs
  .readFileSync("/home/dhruv/coding/js/advent-of-code-2023/day-4/input.txt")
  .toString()
  .split("\n");
file.pop();
let totalScore = 0;

function getStringAsElements(string) {
  string = string.split("|")[0].trimStart().trimEnd().split(" ");
  let array = new Array();
  string.forEach((number) => {
    if (number) {
      number.replaceAll(" ", "");
      array.push(number);
    }
  });
  return array;
}
file.forEach((string, index, array) => {
  console.log(string);
  cards = string.split(":")[1];
  winningCards = getStringAsElements(cards.split("|")[0]);
  elfCards = getStringAsElements(cards.split("|")[1]);
  let elfScore = 0;
  totalScore;
  winningCards.forEach((winCard) => {
    if (winCard) {
      if (elfCards.includes(winCard)) {
        elfScore ? (elfScore *= 2) : (elfScore = 1);
      }
    }
  });
  console.log(elfCards, winningCards);
  totalScore += elfScore;
  console.log(`${elfScore}====>${totalScore}`);
});
console.log("\n\n");
console.log(totalScore);
