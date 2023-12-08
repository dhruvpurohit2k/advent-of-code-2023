const fs = require("fs");

let file = fs
  .readFileSync("/home/dhruv/coding/js/advent-of-code-2023/day-6/input.txt")
  .toString()
  .split("\n");
file.pop();

function getRaceData(file) {
  let timeData = file[0]
    .split(":")[1]
    .trimStart()
    .trimEnd()
    .replaceAll(" ", "");
  (" ");
  let distanveData = file[1]
    .split(":")[1]
    .trimStart()
    .trimEnd()
    .replaceAll(" ", "");
  let raceData = [timeData, distanveData];
  return raceData;
}
function getSpeedRequired(raceData) {
  let lowerBoundary = 0;
  let upperBoundary = 0;
  let time = raceData[0];
  let distance = raceData[1];
  let speed = 0;
  for (let holdTime = 0; holdTime <= time; holdTime++) {
    speed = holdTime;
    timeRemaining = time - holdTime;
    if (speed * timeRemaining > distance) {
      lowerBoundary = holdTime;
      break;
    }
  }
  for (let holdTime = time; holdTime >= 0; holdTime--) {
    speed = holdTime;
    timeRemaining = time - holdTime;
    if (speed * timeRemaining > distance) {
      upperBoundary = holdTime;
      break;
    }
  }
  return upperBoundary - lowerBoundary + 1;
  // console.log(lowerBoundary, upperBoundary);
}
let raceData = getRaceData(file);
console.log(raceData);
console.log(getSpeedRequired(raceData));
