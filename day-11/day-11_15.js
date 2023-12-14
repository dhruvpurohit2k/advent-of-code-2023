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
  let tempgalaxy = new Array();
  let k = 0;
  let counter = 1;
  for (let j = 0; j < galaxyy; j++) {
    let state;
    tempgalaxy[k] = new Array();
    for (let i = 0; i < galaxyx; i++) {
      if (!state && galaxy[j][i] != ".") state = 1;
      // console.log(galaxy[j][i]);
      if (galaxy[j][i] == "#") {
        galaxy[j][i] = counter;
        counter++;
      }
      tempgalaxy[k][i] = galaxy[j][i];
    }
    if (!state) {
      k++;
      tempgalaxy[k] = new Array();
      for (let i = 0; i < galaxyy; i++) {
        if (!state && galaxy[j][i] != ".") state = 1;
        tempgalaxy[k][i] = galaxy[j][i];
      }
    }
    k++;
  }
  let tempgalaxy2 = new Array();
  let x = tempgalaxy[0].length;
  let y = tempgalaxy.length;
  k = 0;
  for (j = 0; j < y; j++) {
    tempgalaxy2[j] = new Array();
  }
  for (i = 0; i < x; i++) {
    let state;
    for (j = 0; j < y; j++) {
      if (!state && tempgalaxy[j][i] != ".") state = 1;
      tempgalaxy2[j][k] = tempgalaxy[j][i];
    }
    if (!state) {
      k++;
      for (j = 0; j < y; j++) {
        if (!state && tempgalaxy[j][i] != ".") state = 1;
        tempgalaxy2[j][k] = tempgalaxy[j][i];
      }
    }
    k++;
  }
  // print(tempgalaxy2);
  return tempgalaxy2;
}

function totalDistance(galaxy) {
  let sum = 0;
  galaxy.forEach((row, j, galaxy) => {
    sum;
    row.forEach((col, i) => {
      if (col != ".") sum += getDistance(i, j, col, galaxy);
    });
  });
  return sum;
}

function getDistance(i, j, col, galaxy) {
  let distance = 0;
  galaxy.forEach((r, k, galaxy) => {
    col;
    i;
    j;
    distance;
    r.forEach((c, l) => {
      if (c != "." && c > col) {
        distance += Math.abs(k - j) + Math.abs(l - i);
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
galaxy = expandGalaxy(galaxy);
print(galaxy);
console.log(totalDistance(galaxy));
