const fs = require("fs");

const cardValue = new Map([
  ["A", 14],
  ["K", 13],
  ["Q", 12],
  ["J", 11],
  ["T", 10],
  ["9", 9],
  ["8", 8],
  ["7", 7],
  ["6", 6],
  ["5", 5],
  ["4", 4],
  ["3", 3],
  ["2", 2],
]);

function getCardBid(file) {
  let games = new Array();
  file.forEach((game) => {
    games.push([[...game.split(" ")[0]], Number(game.split(" ")[1])]);
    // games.push([game.split(" ")[0], Number(game.split(" ")[1])]);
  });
  return games;
}

function getHandType(games) {
  games.forEach((game) => {
    let set = new Set(game[0]);
    game[2] = "";
    let handstring = "";
    set.forEach((value, index, set) => {
      game;
      let counter = 0;
      game[0].forEach((card) => {
        if (value == card) counter++;
      });
      handstring += `${counter}`;
    });
    if (handstring.length == 1) game[2] = 7;
    else if (handstring.length == 4) game[2] = 2;
    else if (handstring.length == 5) game[2] = 1;
    else if (handstring.length == 2) {
      if (handstring[0] == "4" || handstring[0] == "1") game[2] = 6;
      else game[2] = 5;
    } else {
      if (handstring[0] == "2" || handstring[1] == "2") game[2] = 3;
      else game[2] = 4;
    }
  });
}

function findTotalWinnings(games) {
  let totalWinnings = 0;
  games.forEach((game, index) => {
    totalWinnings += game[1] * (index + 1);
  });
  return totalWinnings;
}

let file = fs
  .readFileSync("/home/dhruv/coding/js/advent-of-code-2023/day-7/input.txt")
  .toString()
  .split("\n");
file.pop();

let games = getCardBid(file);
getHandType(games);
games.sort((a, b) => {
  if (b[2] - a[2]) return a[2] - b[2];
  else {
    let i = 0;
    while (cardValue.get(a[0][i]) - cardValue.get(b[0][i]) == 0) {
      i++;
    }
    return cardValue.get(a[0][i]) - cardValue.get(b[0][i]);
  }
});
console.log(games);
console.log(findTotalWinnings(games));
