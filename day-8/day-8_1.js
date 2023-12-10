const fs = require("fs");

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

function calNumSteps(directions, map, mapping) {
  let currentLocation = mapping.get("AAA");
  let numberSteps = 0;
  let nextMove = 0;
  const numDirections = directions.length;
  while (mapping.get(map[currentLocation][0]) != mapping.get("ZZZ")) {
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
  return numberSteps;
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
console.log(calNumSteps(directions, map, mapping));
