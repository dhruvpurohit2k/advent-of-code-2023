const fs = require("fs");

const cardValue = new Map([
  ["A", 14],
  ["K", 13],
  ["Q", 12],
  ["T", 11],
  ["9", 10],
  ["8", 9],
  ["7", 8],
  ["6", 7],
  ["5", 6],
  ["4", 5],
  ["3", 4],
  ["2", 3],
  ["J", 2],
]);

function getCardBid(file) {
  let games = new Array();
  file.forEach((game) => {
    let cards = game.split(" ")[0];
    let bet = Number(game.split(" ")[1]);
    games.push([[...cards], bet]);
  });
  return games;
}
function useJocker(cards) {
  cardValue;
  let maxcounter, maxindex, maxvalue;
  let handSet = new Set(cards);
  handSet.forEach((card) => {
    let counter = 0;
    if (card != "J") {
      for (i = 0; i < 5; i++) {
        if (cards[i] == card) counter++;
        if (!maxvalue) {
          maxvalue = card;
        } else if (cardValue.get(maxvalue) < cardValue.get(card))
          maxvalue = card;
      }
    }
    if (!maxcounter) {
      maxcounter = counter;
      maxindex = card;
    } else if (maxcounter < counter) {
      maxcounter = counter;
      maxindex = card;
    }
  });
  if (maxcounter != 1) {
    cards = cards.replaceAll("J", `${maxindex}`);
  } else cards = cards.replaceAll("J", `${maxvalue}`);
  return cards;
}

function getHandType(games) {
  games.forEach((game) => {
    game[2] = "";
    game[3] = game[0];
    game[0] = [...useJocker(new String(game[0]).replaceAll(",", ""))];
    let set = new Set(game[0]);
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
games.forEach((game) => {
  console.log(game);
});
games.sort((a, b) => {
  if (b[2] - a[2]) return a[2] - b[2];
  else {
    let i = 0;
    while (cardValue.get(a[3][i]) - cardValue.get(b[3][i]) == 0) {
      i++;
    }
    return cardValue.get(a[3][i]) - cardValue.get(b[3][i]);
  }
});
console.log(findTotalWinnings(games));
