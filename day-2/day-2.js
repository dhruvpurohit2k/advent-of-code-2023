const fs = require("fs");

fs.readFile(
  "/home/dhruv/coding/js/advent-of-code-2023/day-2/input.txt",
  (err, inputD) => {
    if (err) {
      throw err;
    }
    let sum = 0;
    let obj = new Object();
    let gamelist = new Array();
    const re = /\d/g;
    stringArray = inputD.toString().split("\n");
    stringArray.pop();
    stringArray.forEach((string, value, array) => {
      let game = string.split(":");
      obj.gameno = game[0].match(re).reduce((previous, current) => {
        return previous + current;
      });
      console.log(obj.gameno);
      gamelist = game[1].split(";");
      // console.log(`gamelist - `);
      console.log(gamelist);
      colorObj = { blue: 14, green: 13, red: 12 };
      let state = true;
      gamelist.forEach((element) => {
        colorObj;
        color = element.split(",");
        state;
        color.forEach((ele) => {
          ele = ele.slice(1).split(" ");
          console.log(ele);
          if (colorObj[`${ele[1]}`] < Number(ele[0])) {
            state = false;
          }
        });
      });
      if (state) {
        sum += Number(obj["gameno"]);
        console.log("possible");
      } else {
        console.log("impossible");
      }
      console.log(sum);
    });
  },
);
