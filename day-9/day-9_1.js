const fs = require("fs");
const { nextTick } = require("process");

function getNextvalue(array) {
  let nextarray = new Array();
  nextarray[0] = new Array();
  array.forEach((ele) => {
    nextarray[0].push(Number(ele));
  });
  let allzeros = false;
  let delta = 0;
  while (!allzeros) {
    allzeros = true;
    nextarray[delta + 1] = new Array();
    for (i = 0; i < nextarray[delta].length - 1; i++) {
      let diff = nextarray[delta][i + 1] - nextarray[delta][i];
      nextarray[delta + 1].push(diff);
      if (diff) allzeros = false;
    }
    delta++;
  }
  nextarray[delta].push(0);
  while (delta > 0) {
    nextarray[delta - 1].push(
      Number(nextarray[delta - 1].slice(-1)) +
        Number(nextarray[delta].slice(-1)),
    );
    delta--;
  }
  return Number(nextarray[0].slice(-1));
}

let file = fs
  .readFileSync("/home/dhruv/coding/js/advent-of-code-2023/day-9/input.txt")
  .toString()
  .split("\n");
file.pop();
let numbers = new Array();
file.forEach((value) => {
  numbers.push(value.split(" "));
});

let nextnumber = 0;
numbers.forEach((array) => {
  nextnumber += getNextvalue(array);
});
console.log(nextnumber);
