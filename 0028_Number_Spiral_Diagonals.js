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
  let totalSum = 0;

  for (let i = 0; i < lengthArr; i++) {
    arr.push(new Array(lengthArr));
  }

  let count = 1;

  let right = 0;
  let down = 0;
  let left = 0;
  let up = 0;

  let movRight = 1;
  let movDown = 1;
  let movLeft = 2;
  let movUp = 2;

  let maxMovRight = 1;
  let maxMovDown = 1;
  let maxMovLeft = 2;
  let maxMovUp = 2;

  // Center position
  arr[parseInt(lengthArr / 2) - up + down][parseInt(lengthArr / 2) + right - left] = count;

  // Helix shape:
  //
  //           7
  //           6 1 2
  //           5 4 3
  while (count <= lengthArr * lengthArr - lengthArr) {
    while (movRight) {
      ++count;
      ++right;
      arr[parseInt(lengthArr / 2) - up + down][parseInt(lengthArr / 2) + right - left] = count;
      --movRight;
    }
    maxMovRight += 2;
    movRight = maxMovRight;

    while (movDown) {
      ++count;
      ++down;
      arr[parseInt(lengthArr / 2) - up + down][parseInt(lengthArr / 2) + right - left] = count;
      --movDown;
    }
    maxMovDown += 2;
    movDown = maxMovDown;

    while (movLeft) {
      ++count;
      ++left;
      arr[parseInt(lengthArr / 2) - up + down][parseInt(lengthArr / 2) + right - left] = count;
      --movLeft;
    }
    maxMovLeft += 2;
    movLeft = maxMovLeft;

    while (movUp) {
      ++count;
      ++up;
      arr[parseInt(lengthArr / 2) - up + down][parseInt(lengthArr / 2) + right - left] = count;
      --movUp;
    }
    maxMovUp += 2;
    movUp = maxMovUp;
  }

  // Last right.
  movRight = lengthArr - 1;
  while (movRight) {
    ++right;
    ++count;
    arr[parseInt(lengthArr / 2) - up + down][parseInt(lengthArr / 2) + right - left] = count;
    --movRight;
  }

  // \ Diagonal.
  for (let i = 0, j = 0; i < lengthArr, j < lengthArr; i++, j++) {
    totalSum += arr[i][j];
  }

  // / Diagonal
  for (let i = lengthArr - 1, j = 0; i > 0, j < lengthArr; i--, j++) {
    totalSum += arr[j][i];
  }

  // Middle point (1) is summed two times in the diagonals.
  return totalSum - 1;
}

console.log(sumSpiralDiagonals(1001));
