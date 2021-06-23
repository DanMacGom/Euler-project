// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
let arr = [...Array(21).keys()].filter((num) => num !== 0);

function isEvenlyDivisible1to20(number) {
  let res = arr.map((num) => number % num === 0).every((v) => v === true);

  return res;
}

function smallestNumberEvenlyDivisible1to20() {
  let i = 1;

  while (!isEvenlyDivisible1to20(i)) {
    i += 1;
  }

  return i;
}

console.log(smallestNumberEvenlyDivisible1to20());
