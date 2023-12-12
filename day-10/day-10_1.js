const fs = require("fs");
const { resourceUsage } = require("process");

function getStartingLocation(map) {
  let x;
  let y;
  map.forEach((element, index) => {
    if (element.includes("S")) y = index;
  });
  let i = 0;
  for (i; i < map[y].length; i++) {
    if (map[y][i] == "S") {
      x = i;
    }
  }
  return [x, y];
}
function traverse(coords, map) {
  let x = coords[0];
  let y = coords[1];
  let z = coords[2];
  if (map[y][x] == "|") {
    if (z == 0) y -= 1;
    else y += 1;
  } else if (map[y][x] == "-") {
    if (z == 1) x += 1;
    else x -= 1;
  } else if (map[y][x] == "J") {
    if (z == 1) {
      y -= 1;
      z = 0;
    } else {
      x -= 1;
      z = 3;
    }
  } else if (map[y][x] == "7") {
    if (z == 1) {
      y += 1;
      z = 2;
    } else {
      x -= 1;
      z = 3;
    }
  } else if (map[y][x] == "F") {
    if (z == 0) {
      x += 1;
      z = 1;
    } else {
      y += 1;
      z = 2;
    }
  } else {
    if (z == 3) {
      y -= 1;
      z = 0;
    } else {
      x += 1;
      z = 1;
    }
  }
  return [x, y, z];
}
function validLocation(map, startingcoords) {
  console.log(startingcoords);
  let x = startingcoords[0];
  let y = startingcoords[1];
  let validloc = [0, 0, 0, 0];
  console.log(map[y + 1][x], map[y - 1][x], map[y][x + 1], map[y][x - 1]);
  if (map[y + 1][x] == "|" || map[y + 1][x] == "7" || map[y + 1][x] == "L")
    validloc[2] = 1;
  if (map[y - 1][x] == "|" || map[y - 1][x] == "F" || map[y - 1][x] == "J")
    validloc[0] = 1;
  if (map[y][x + 1] == "-" || map[y][x + 1] == "J" || map[y][x + 1] == "7")
    validloc[1] = 1;
  if (map[y][x - 1] == "-" || map[y][x - 1] == "F" || map[y][x - 1] == "L")
    validloc[3] = 1;
  return validloc;
}

function moveInLoop(map, startingcoords) {
  let x1;
  let y1;
  let z1;
  let x2;
  let y2;
  let z2;
  let state = true;
  let step = 1;
  let validloc = validLocation(map, startingcoords);
  console.log(`this is valid location ----- ${validloc}`);
  validloc.forEach((dir, ind) => {
    if (dir) {
      if (!x1) {
        if (ind == 0) {
          y1 = startingcoords[1] - 1;
          x1 = startingcoords[0];
          z1 = ind;
        } else if (ind == 1) {
          y1 = startingcoords[1];
          x1 = startingcoords[0] + 1;
          z1 = ind;
        } else if (ind == 2) {
          y1 = startingcoords[1] + 1;
          x1 = startingcoords[0];
          z1 = ind;
        } else {
          y1 = startingcoords[1];
          x1 = startingcoords[0] - 1;
          z1 = ind;
        }
      } else {
        if (ind == 0) {
          y2 = startingcoords[1] - 1;
          x2 = startingcoords[0];
          z2 = ind;
        } else if (ind == 1) {
          y2 = startingcoords[1];
          x2 = startingcoords[0] + 1;
          z2 = ind;
        } else if (ind == 2) {
          y2 = startingcoords[1] + 1;
          x2 = startingcoords[0];
          z2 = ind;
        } else {
          y2 = startingcoords[1];
          x2 = startingcoords[0] - 1;
          z2 = ind;
        }
      }
    }
  });
  let coords1 = [x1, y1, z1];
  let coords2 = [x2, y2, z2];
  console.log(`cords1 ${coords1}`);
  console.log(`cords2 ${coords2}`);
  while (state) {
    step++;
    coords1 = traverse(coords1, map);
    console.log(`cords1 ${coords1}`);
    coords2 = traverse(coords2, map);
    console.log(`cords2 ${coords2}`);
    if (coords1[0] == coords2[0] && coords1[1] == coords2[1]) state = false;
  }
  // while (state) {
  //   coords1 = traverse(coords1, map);
  //   step++;
  //   console.log(`cords1 ${coords1}`);
  //   if (coords1[0] == startingcoords[0] && coords1[1] == startingcoords[1])
  //     state = false;
  // }
  return step;
}

let map = fs
  .readFileSync("/home/dhruv/coding/js/advent-of-code-2023/day-10/input.txt")
  .toString()
  .split("\n");
map.pop();

console.log(map);
let startingcoords = getStartingLocation(map);
console.log(moveInLoop(map, startingcoords));
