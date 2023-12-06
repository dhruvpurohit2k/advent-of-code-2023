const { createPublicKey } = require("crypto");
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

function getScarchCards(array) {
  let scrachCardArray = new Array();
  array.forEach((element) => {
    let scrachCard = [element.split(":")[0], 1];
    scrachCardArray.push(scrachCard);
  });
  return scrachCardArray;
}

function getTotalScore(cardList) {
  let sum = 0;
  cardList.forEach((element) => {
    sum += element[1];
  });
  return sum;
}

let cardList = getScarchCards(file);
file.forEach((string, index, array) => {
  let scrachCard = string.split(":")[0];
  cardList;
  cards = string.split(":")[1];
  winningCards = getStringAsElements(cards.split("|")[0]);
  elfCards = getStringAsElements(cards.split("|")[1]);
  let elfScore = 0;
  console.log(cardList);
  winningCards.forEach((winCard, cardno) => {
    if (winCard) {
      if (elfCards.includes(winCard)) {
        elfScore++;
        cardList[index + elfScore][1] += 1 * cardList[index][1];
      }
    }
  });
});
totalScore = getTotalScore(cardList);
console.log("\n\n");
console.log(cardList);
console.log(totalScore);
