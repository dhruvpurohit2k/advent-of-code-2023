const fs = require("fs");
const { join } = require("path");

function print(galaxy) {
  console.log("Printing Galaxy");
  galaxy.forEach((ele) => {
    console.log(...ele);
  });
}

function makeGalaxy(file) {
  let galaxy = new Array();
  file.forEach((ele) => {
    galaxy.push(ele.split(""));
  });
  return galaxy;
}

function expandGalaxy(galaxy) {
  let galaxyx = galaxy[0].length;
  let galaxyy = galaxy.length;
  let xpand = new Array();
  let ypand = new Array();
  let counter = 1;
  for (let j = 0; j < galaxyy; j++) {
    let state;
    for (let i = 0; i < galaxyx; i++) {
      if (!state && galaxy[j][i] != ".") state = 1;
      if (galaxy[j][i] == "#") {
        galaxy[j][i] = counter++;
      }
    }
    if (!state) ypand.push(j);
  }
  for (i = 0; i < galaxyx; i++) {
    let state;
    for (j = 0; j < galaxyy; j++) {
      if (!state && galaxy[j][i] != ".") state = 1;
    }
    if (!state) xpand.push(i);
  }
  // print(tempgalaxy2);
  return [ypand, xpand];
}

function totalDistance(xpand, ypand, galaxy) {
  let sum = 0;
  galaxy.forEach((row, j, galaxy) => {
    sum;
    xpand;
    ypand;
    row.forEach((col, i) => {
      if (col != ".") sum += getDistance(i, j, col, galaxy, xpand, ypand);
    });
  });
  return sum;
}

function getDistance(i, j, col, galaxy, xpand, ypand) {
  let distance = 0;
  galaxy.forEach((r, k, galaxy) => {
    col;
    i;
    j;
    xpand;
    ypand;
    distance;
    r.forEach((c, l) => {
      distance;
      xpand;
      ypand;
      if (c != "." && c > col) {
        distance;
        let extra = 0;

        xpand.forEach((x) => {
          if ((l > x && x > i) || (l < x && x < i)) {
            extra += 1000000 - 1;
            // extra++;
            console.log("xpand");
          }
        });
        ypand.forEach((y) => {
          if ((k > y && y > j) || (k < y && y < j)) {
            extra += 1000000 - 1;
            // extra++;
            console.log("ypand");
          }
        });
        console.log(
          `between ${col} and ${c} is ${
            extra + Math.abs(k - j) + Math.abs(l - i)
          }`,
        );
        distance += extra + Math.abs(k - j) + Math.abs(l - i);
        console.log(distance);
      }
    });
  });
  return distance;
}

let file = fs
  .readFileSync("/home/dhruv/coding/js/advent-of-code-2023/day-11/input.txt")
  .toString()
  .split("\n");
file.pop();

let galaxy = makeGalaxy(file);
let expansion = expandGalaxy(galaxy);
let xpand = expansion[1];
let ypand = expansion[0];
print(galaxy);
console.log(xpand, ypand);
console.log(totalDistance(xpand, ypand, galaxy));
