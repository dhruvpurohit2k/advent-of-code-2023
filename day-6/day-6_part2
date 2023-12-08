const fs = require("fs");

let file = fs
  .readFileSync("/home/dhruv/coding/js/advent-of-code-2023/day-6/input.txt")
  .toString()
  .split("\n");
file.pop();

function getRaceData(file) {
  let timeData = file[0].split(":")[1].trimStart().trimEnd().split(" ");
  let distanveData = file[1].split(":")[1].trimStart().trimEnd().split(" ");
  let raceData = new Array();
  timeData = timeData.filter((item) => {
    if (item) return item;
  });
  distanveData = distanveData.filter((item) => {
    if (item) return item;
  });
  timeData.forEach((time, raceno) => {
    raceData.push([Number(time), Number(distanveData[raceno])]);
  });
  return raceData;
}
function getSpeedRequired(raceData) {
  let totalWinProbability = 1;
  raceData.forEach((race, raceno, raceData) => {
    // console.log(race);
    let time = race[0];
    let distance = race[1];
    let speed = 0;
    let winCounter = 0;
    for (let holdTime = 0; holdTime <= time; holdTime++) {
      speed = holdTime;
      timeRemaining = time - holdTime;
      if (speed * timeRemaining > distance) {
        winCounter++;
        // console.log(`${speed}---${timeRemaining} for race ${raceno + 1}`);
      }
      // console.log(`!!!${speed}---${timeRemaining} for race ${raceno + 1}`);
    }
    totalWinProbability *= winCounter;
  });
  return totalWinProbability;
}
let raceData = getRaceData(file);
console.log(getSpeedRequired(raceData));
