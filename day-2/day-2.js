const { warn } = require("console");
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
      let blue = 0;
      let red = 0;
      let green = 0;
      gamelist.forEach((element) => {
        blue;
        green;
        red;
        color = element.split(",");
        color.forEach((ele) => {
          ele = ele.slice(1).split(" ");
          console.log(ele);
          if (ele[1] == `blue` && blue < Number(ele[0])) {
            blue = ele[0];
          }
          if (ele[1] == `red` && red < Number(ele[0])) {
            red = ele[0];
          }
          if (ele[1] == `green` && green < Number(ele[0])) {
            green = ele[0];
          }
        });
      });
      console.log(`blue - ${blue} green - ${green} red - ${red}`);
      sum = sum + blue * red * green;
      console.log(sum);
    });
  },
);
