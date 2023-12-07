const { timeStamp } = require("console");
const fs = require("fs");

function convertInfo(arrayRange) {
  let conversionInfo = new Array();
  let numberList = arrayRange.split(":")[1].slice(1).split("\n");
  numberList.forEach((ele) => {
    if (ele) {
      let sourceRangeStart = Number(ele.split(" ")[1]);
      let destinationRangeStart = Number(ele.split(" ")[0]);
      let rangeLength = Number(ele.split(" ")[2]);
      conversionInfo.push([
        destinationRangeStart,
        sourceRangeStart,
        rangeLength,
      ]);
    }
  });
  console.log(conversionInfo);
  return conversionInfo;
}
function convert(conversionArray, source) {
  let destination = source;
  conversionArray.forEach((array) => {
    if (source < array[1] + array[2] && source >= array[1]) {
      let mapping = array[0] - array[1];
      destination = source + mapping;
    }
  });
  return destination;
}
function getClosestLocation(seeds) {
  seeds.forEach((ele) => {
    seed = Number(ele);
    location = getLocation(seed);
    if (!closestLocation) {
      closestLocation = location;
    }
    closestLocation =
      closestLocation > location
        ? (closestLocation = location)
        : closestLocation;
  });
}

function getLocation(seed) {
  let soil = convert(seedToSoil, seed);
  let fertilizer = convert(soilToFertilizer, soil);
  let water = convert(fertilizerToWater, fertilizer);
  let light = convert(waterToLight, water);
  let temperature = convert(lightToTemperature, light);
  let humidity = convert(temperatureToHumidity, temperature);
  let location = convert(humidityToLocation, humidity);
  return location;
}

function getSeedRanges(seeds) {
  let seedRanges = new Array();
  let i = 0;
  let j = 1;
  for (i, j; i < seeds.length - 1; i += 2, j += 2) {
    seedRanges.push([Number(seeds[i]), Number(seeds[j])]);
  }
  return seedRanges;
}

let file = fs
  .readFileSync("/home/dhruv/coding/js/advent-of-code-2023/day-5/input.txt")
  .toString()
  .split("\n\n");
let fileArray = file.filter((ele) => {
  if (ele) {
    return ele;
  }
});

const seeds = fileArray[0].split(":")[1].split(" ").splice(1);
const seedRanges = getSeedRanges(seeds);
const seedToSoil = convertInfo(fileArray[1]);
const soilToFertilizer = convertInfo(fileArray[2]);
const fertilizerToWater = convertInfo(fileArray[3]);
const waterToLight = convertInfo(fileArray[4]);
const lightToTemperature = convertInfo(fileArray[5]);
const temperatureToHumidity = convertInfo(fileArray[6]);
const humidityToLocation = convertInfo(fileArray[7]);
let closestLocation;

seedRanges.forEach((seedRange) => {
  let seedStart = seedRange[0];
  let rangeWidth = seedRange[1];
  let seed = seedStart;
  for (seed; seed < seedStart + rangeWidth; seed++) {
    location = getLocation(seed);
    if (!closestLocation) closestLocation = location;
    closestLocation = closestLocation > location ? location : closestLocation;
  }
});

console.log(closestLocation);
