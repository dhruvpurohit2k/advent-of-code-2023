const fs = require("fs");

fs.readFile(
  "/home/dhruv/coding/js/advent-of-code-2023/day-1/input.txt",
  (err, inputD) => {
    if (err) throw err;
    let file = inputD.toString();
    let stringArray = new Array();
    stringArray = file.split("\n");
    stringArray.pop();
    let sum = 0;
    stringArray.forEach((string, index, array) => {
      let re = /\d/g;
      let nums = string.match(re);
      let final = new Number(nums[0] + nums[nums.length - 1]);
      sum += final;
    });
    console.log(sum);
  },
);
