const fs = require("fs");
fs.readFile("input.txt", (err, inputD) => {
  if (err) throw err;
  console.log(inputD.toString());
});
