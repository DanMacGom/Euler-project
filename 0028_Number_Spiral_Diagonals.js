// Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows:

// 21 22 23 24 25
// 20  7  8  9 10
// 19  6  1  2 11
// 18  5  4  3 12
// 17 16 15 14 13

// It can be verified that the sum of the numbers on the diagonals is 101.

// What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral formed in the same way?
function sumSpiralDiagonals(lengthArr) {
  let arr = [];
  let width = 1;

  for (let i = 0; i < lengthArr; i++) {
    arr.push(new Array(lengthArr));
  }

  let count = 1;
  let right = 1;
  let down = 1;
  let left = 2;
  let top = 2;

  arr[parseInt(lengthArr / 2)][parseInt(lengthArr / 2)] = 1;
  //RIght
  arr[parseInt(lengthArr / 2)][parseInt(lengthArr / 2) + 1] = 2;
  //Down
  arr[parseInt(lengthArr / 2) + 1][parseInt(lengthArr / 2) + 1] = 3;
  //Left
  arr[parseInt(lengthArr / 2) + 1][parseInt(lengthArr / 2) + 1 - 1] = 4;
  arr[parseInt(lengthArr / 2) + 1][parseInt(lengthArr / 2) + 1 - 1 - 1] = 5;

  // Top
  arr[parseInt(lengthArr / 2) + 1 - 1][parseInt(lengthArr / 2) + 1 - 1 - 1] = 6;
  arr[parseInt(lengthArr / 2) + 1 - 1 - 1][
    parseInt(lengthArr / 2) + 1 - 1 - 1
  ] = 7;

  //right
  arr[parseInt(lengthArr / 2) + 1 - 1 - 1][
    parseInt(lengthArr / 2) + 1 - 1 - 1 + 1
  ] = 8;
  arr[parseInt(lengthArr / 2) + 1 - 1 - 1][
    parseInt(lengthArr / 2) + 1 - 1 - 1 + 1 + 1
  ] = 9;

  return arr;
}

console.log(sumSpiralDiagonals(3));
