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
    let final = 0;
    let counter = 1;
    let nums = new Array();
    const map = new Map([
      ["one", "1"],
      ["zerone", "01"],
      ["zero", "0"],
      ["two", "2"],
      ["three", "3"],
      ["four", "4"],
      ["five", "5"],
      ["six", "6"],
      ["seven", "7"],
      ["eight", "8"],
      ["nine", "9"],
      ["eightwo", "82"],
      ["eighthree", "83"],
      ["oneight", "18"],
      ["fiveight", "58"],
      ["nineight", "98"],
      ["twone", "21"],
      ["sevenine", "79"],
    ]);
    let re =
      /(\d|eightwo|eighthree|nineight|sevenine|fiveight|oneight|twone|zero|zerone|one|two|three|four|five|six|seven|eight|nine)/g;
    stringArray.forEach((string, index, array) => {
      map;
      nums = string.match(re);
      console.log(nums);
      nums = [nums[0], nums[nums.length - 1]];
      console.log(nums);
      nums.forEach((ele, index, nums) => {
        if (map.get(ele)) {
          if (index == 0) {
            nums[index] = map.get(ele)[0];
          } else {
            nums[index] = map.get(ele)[map.get(ele).length - 1];
          }
        }
      });
      console.log(`${string} ${nums}`);
      final = new Number(nums[0] + nums[nums.length - 1]);
      console.log(`${counter++} ${final}`);
      // console.log(`${sum} + ${final} = ${sum + final}`);
      sum += final;
    });
    console.log(sum);
  },
);
