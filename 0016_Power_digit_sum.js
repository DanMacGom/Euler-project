// 215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

// What is the sum of the digits of the number 2^1000?
function sumOfDigits(base, power) {
  const num = Math.pow(base, power);

  let sum = 0;
  for (let n of BigInt(num).toString()) {
    sum += parseInt(n);
  }

  return sum;
}

console.log(sumOfDigits(2, 1000));
