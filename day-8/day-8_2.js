const { clear } = require("console");
const { createPublicKey } = require("crypto");
const fs = require("fs");
const { start } = require("repl");

function mapAsArray(distination, index, array) {
  pointArray = distination.split("=");
  location = pointArray[0].trimEnd();
  topoints = pointArray[1].split(",");
  topoints[0] = topoints[0].replaceAll(" (", "");
  topoints[1] = topoints[1].replaceAll(")", "").trimStart();
  array[index] = [location, topoints];
}

function createMapping(map) {
  let mapping = new Map();
  map.forEach((element, index) => {
    mapping.set(element[0], index);
  });
  return mapping;
}

function getStartingLocations(map) {
  let startingLocations = new Array();
  map.forEach((element, index) => {
    if (element[0][2] == "A") {
      startingLocations.push(index);
    }
  });
  return startingLocations;
}

function calNumSteps(directions, map, mapping, sLoc) {
  let eLoc = new Array();
  directions;
  map;
  mapping;
  sLoc;
  sLoc.forEach((start) => {
    let currentLocation = mapping.get(map[start][0]);
    let numberSteps = 0;
    let nextMove = 0;
    const numDirections = directions.length;
    while (map[currentLocation][0][2] != "Z") {
      if (directions[nextMove] == "L" && nextMove < numDirections) {
        currentLocation = mapping.get(map[currentLocation][1][0]);
        numberSteps++;
        nextMove++;
      } else if (directions[nextMove] == "R" && nextMove < numDirections) {
        currentLocation = mapping.get(map[currentLocation][1][1]);
        numberSteps++;
        nextMove++;
      } else nextMove = 0;
    }
    eLoc.push(numberSteps);
  });
  return eLoc;
}

function gcd(a, b) {
  for (let temp = b; b !== 0; ) {
    b = a % b;
    a = temp;
    temp = b;
  }
  return a;
}

function lcm(array) {
  let product = array.reduce((previous, current) => {
    return (previous * current) / gcd(previous, current);
  });
  return product;
}

let file = fs
  .readFileSync("/home/dhruv/coding/js/advent-of-code-2023/day-8/input.txt")
  .toString()
  .split("\n\n");
const directions = [...file[0]];
let map = file[1].split("\n");
map.pop();
let maptemp = new Array();

map.forEach(mapAsArray);
const mapping = createMapping(map);
let sLoc = getStartingLocations(map);
let eLoc = calNumSteps(directions, map, mapping, sLoc);
console.log(lcm(eLoc));
