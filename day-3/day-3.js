const fs = require("fs");

const reg = /\W/g;
const reg2 = /\d/g;
function isValidNumber(char) {
  if (char.match(reg)) {
    // console.log(char.match(reg));
    return true;
  } else {
    false;
  }
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
    for (line; line < number; line++) {
      for (char = 0; char < numChar; char++) {
        if (!isNaN(parseInt(stringArray[line][char]))) {
          if (line != 0 && line != numChar - 1) {
            if (char != 0 && char != numChar - 1) {
              let nexLine = stringArray[line + 1];
              let previousLine = stringArray[line - 1];
              if (
                isValidNumber(nexLine[char]) ||
                isValidNumber(nexLine[char - 1]) ||
                isValidNumber(nexLine[char + 1]) ||
                isValidNumber(previousLine[char]) ||
                isValidNumber(previousLine[char - 1]) ||
                isValidNumber(previousLine[char + 1]) ||
                isValidNumber(stringArray[line][char - 1]) ||
                isValidNumber(stringArray[line][char + 1])
              ) {
                if (stringArray[line][char - 1] == "a") {
                  numStr = stringArray[line][char];
                  if (stringArray[line][char + 1] != "a") {
                    numStr +=
                      stringArray[line][char + 1] + stringArray[line][char + 2];
                    char += 2;
                  }
                } else if (stringArray[line][char + 1] == "a") {
                  numStr =
                    stringArray[line][char - 2] +
                    stringArray[line][char - 1] +
                    stringArray[line][char];
                } else if (
                  !isValidNumber(stringArray[line][char - 1]) &&
                  !isValidNumber(stringArray[line][char + 1])
                ) {
                  numStr =
                    stringArray[line][char - 1] +
                    stringArray[line][char] +
                    stringArray[line][char + 1];
                  char++;
                } else if (isValidNumber(stringArray[line][char - 1])) {
                  numStr =
                    stringArray[line][char] +
                    stringArray[line][char + 1] +
                    stringArray[line][char + 2];
                  char += 2;
                } else {
                  numStr =
                    stringArray[line][char - 2] +
                    stringArray[line][char - 1] +
                    stringArray[line][char];
                }
              }
              finalnum = parseInt(
                numStr.replaceAll("a", "").replaceAll("*", ""),
              );

              sum += finalnum;
              console.log(
                `final is ${numStr.replaceAll("a", "")} => ${parseInt(
                  numStr.replaceAll("a", ""),
                )}`,
              );
              numStr = "0";
            }
          } else if (line == 0) {
            if (char != 0 && char != numChar - 1) {
              let nexLine = stringArray[line + 1];
              if (
                isValidNumber(nexLine[char]) ||
                isValidNumber(nexLine[char - 1]) ||
                isValidNumber(nexLine[char + 1]) ||
                isValidNumber(stringArray[line][char - 1]) ||
                isValidNumber(stringArray[line][char + 1])
              ) {
                if (stringArray[line][char - 1] == "a") {
                  numStr =
                    stringArray[line][char] +
                    stringArray[line][char + 1] +
                    stringArray[line][char + 2];

                  char += 2;
                } else if (stringArray[line][char + 1] == "a") {
                  numStr =
                    stringArray[line][char - 2] +
                    stringArray[line][char - 1] +
                    stringArray[line][char];
                } else if (
                  !isValidNumber(stringArray[line][char - 1]) &&
                  !isValidNumber(stringArray[line][char + 1])
                ) {
                  numStr =
                    stringArray[line][char - 1] +
                    stringArray[line][char] +
                    stringArray[line][char + 1];
                  char++;
                } else if (isValidNumber(stringArray[line][char - 1])) {
                  numStr =
                    stringArray[line][char] +
                    stringArray[line][char + 1] +
                    stringArray[line][char + 2];
                  char += 2;
                } else {
                  numStr =
                    stringArray[line][char - 2] +
                    stringArray[line][char - 1] +
                    stringArray[line][char];
                }
              }
              finalnum = parseInt(
                numStr.replaceAll("a", "").replaceAll("*", ""),
              );
              sum += finalnum;
              console.log(
                `final is ${numStr.replaceAll("a", "")} => ${parseInt(
                  numStr.replaceAll("a", ""),
                )}`,
              );
              numStr = "0";
            }
          } else {
            if (char != 0 && char != numChar - 1) {
              let previousLine = stringArray[line - 1];
              if (
                isValidNumber(previousLine[char]) ||
                isValidNumber(previousLine[char - 1]) ||
                isValidNumber(previousLine[char + 1]) ||
                isValidNumber(stringArray[line][char - 1]) ||
                isValidNumber(stringArray[line][char + 1])
              ) {
                if (stringArray[line][char - 1] == "a") {
                  numStr =
                    stringArray[line][char] +
                    stringArray[line][char + 1] +
                    stringArray[line][char + 2];

                  char += 2;
                } else if (stringArray[line][char + 1] == "a") {
                  numStr =
                    stringArray[line][char - 2] +
                    stringArray[line][char - 1] +
                    stringArray[line][char];
                } else if (
                  !isValidNumber(stringArray[line][char - 1]) &&
                  !isValidNumber(stringArray[line][char + 1])
                ) {
                  numStr =
                    stringArray[line][char - 1] +
                    stringArray[line][char] +
                    stringArray[line][char + 1];
                  char++;
                } else if (isValidNumber(stringArray[line][char - 1])) {
                  numStr =
                    stringArray[line][char] +
                    stringArray[line][char + 1] +
                    stringArray[line][char + 2];
                  char += 2;
                } else {
                  numStr =
                    stringArray[line][char - 2] +
                    stringArray[line][char - 1] +
                    stringArray[line][char];
                }
              }
              finalnum = parseInt(
                numStr.replaceAll("a", "").replaceAll("*", ""),
              );
              sum += finalnum;
              console.log(
                `final is ${numStr.replaceAll("a", "")} => ${parseInt(
                  numStr.replaceAll("a", ""),
                )}`,
              );
              numStr = "0";
            }
          }
        }
      }
    }
    console.log(sum);
  },
);
