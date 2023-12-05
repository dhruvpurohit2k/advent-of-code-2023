const fs = require("fs");

const reg = /\W/g;
const reg2 = /\d/g;
function isDigit(char) {
  if (char.match(reg2)) {
    // console.log(char.match(reg));
    return true;
  } else {
    false;
  }
}
function getNumber(list, index, j) {
  let number = "";
  if (list[index - 1] == "a") {
    number = list[index];
    if (list[index + 1] != "a") {
      number += list[index + 1] + list[index + 2];
      j += 2;
    }
  } else if (list[index + 1] == "a") {
    if (isDigit(list[index - 2])) {
      number += list[index - 2];
    }
    if (isDigit(list[index - 1])) {
      number += list[index - 1];
    }
    number += list[index];
  } else if (isDigit(list[index + 1]) && isDigit(list[index - 1])) {
    number = list[index - 1] + list[index] + list[index + 1];
    j++;
  } else if (list[index + 1] == "*") {
    if (isDigit(list[index - 2])) {
      number += list[index - 2];
    }
    if (isDigit(list[index - 1])) {
      number += list[index - 1];
    }
    number += list[index];
  } else {
    number += list[index];
    if (isDigit(list[index + 1])) {
      number += list[index + 1];
    }
    if (isDigit(list[index + 2])) {
      number += list[index + 2];
    }
  }

  return [number, j];
}
fs.readFile(
  "/home/dhruv/coding/js/advent-of-code-2023/day-3/input.txt",
  (err, inputD) => {
    if (err) throw err;
    stringArray = inputD.toString().replaceAll(".", "a").split("\n");
    stringArray.pop(0);

    const number = stringArray.length;
    const numChar = stringArray[0].length;
    let line = 0;
    let state = false;
    let numStr = "0";
    let sum = 0;
    let gear = new Array();
    for (line; line < number; line++) {
      for (char = 0; char < numChar; char++) {
        if (stringArray[line][char] == "*") {
          for (i = -1; i <= 1; i++) {
            for (j = -1; j <= 1; j++) {
              if (isDigit(stringArray[line + i][char + j])) {
                temp = getNumber(stringArray[line + i], char + j, j);
                j = temp[1];
                gear.push(parseInt(temp[0].replaceAll("a", "")));
                console.log(temp[0], gear);
              }
            }
          }

          if (gear.length == 2) {
            sum += gear.pop() * gear.pop();
          } else {
            gear.pop();
          }
          console.log(stringArray[line][char]);
        }
      }
    }
    console.log(sum);
  },
);
