const fs = require("fs");

fs.readFile(
  "/home/dhruv/coding/js/advent-of-code-2023/day-1_2/input.txt",
  (err, inputD) => {
    if (err) throw err;
    let file = inputD.toString();
    let stringArray = new Array();
    stringArray = file.split("\n");
    stringArray.pop();
    let sum = 0;
    const map = new Map([
      ["one", "1"],
      ["two", "2"],
      ["three", "3"],
      ["four", "4"],
      ["five", "5"],
      ["six", "6"],
      ["seven", "7"],
      ["eight", "8"],
      ["nine", "9"],
    ]);
    stringArray.forEach((string, index, array) => {
      map;
      let re = /(\d|one|two|three|four|five|six|seven|eight|nine)/g;
      let nums = string.match(re);
      nums = [nums[0], nums[nums.length - 1]];
      nums.forEach((ele, index, nums) => {
        if (map.get(ele)) {
          nums[index] = map.get(ele);
        }
      });
      let final = new Number(nums[0] + nums[nums.length - 1]);
      sum = sum + final;
    });
    console.log(sum);
  },
);
