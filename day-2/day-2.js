const fs = require("fs");
let obj = new Object();
fs.readFile(
  "/home/dhruv/coding/js/advent-of-code-2023/day-2/input.txt",
  (err, inputD) => {
    if (err) {
      throw err;
    }
    obj;
    let gamelist = new Array();
    const re = /\d/g;
    stringArray = inputD.toString().split("\n");
    stringArray.pop();
    stringArray.forEach((string, value, array) => {
      let game = string.split(":");
      obj.gameno = game[0].match(re).reduce((previous, current) => {
        return previous + current;
      });
      gamelist = game[1].split(";");
      gamelist.forEach((value, index, array) => {
        obj[`${index + 1}`] = { blue: 0, green: 0, red: 0 };
        cubes = value.split(",");
        // console.log(cubes);
        cubes.forEach((v, i, arr) => {
          cubedetails = v.slice(1, v.length).split(" ");
          obj[`${index + 1}`][`${cubedetails[1]}`] +=
            new Number(cubedetails[0]) +
            obj[`${index + 1}`][`${cubedetails[1]}`];
        });
      });
      console.log(obj);
    });
  },
);
console.log(obj);
