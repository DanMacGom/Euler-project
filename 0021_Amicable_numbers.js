// Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
// If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

// For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

// Evaluate the sum of all the amicable numbers under 10000.
function amicableNumbers(n) {
  let propDiv = [];
  const sumOfProperDivisors = {};
  const amicablePairs = new Set();

  for (let i = n; i > 1; i--) {
    for (let k = i - 1; k > 0; k--) {
      if (i % k === 0) {
        propDiv.push(k);
      }
    }

    sumOfProperDivisors[i] = propDiv.reduce((acc, curr) => acc + curr);
    propDiv = [];
  }

  for (let num in sumOfProperDivisors) {
    if (
      sumOfProperDivisors.hasOwnProperty(sumOfProperDivisors[num]) &&
      sumOfProperDivisors[sumOfProperDivisors[num]] === parseInt(num) &&
      sumOfProperDivisors[num] !== parseInt(num)
    ) {
      amicablePairs.add(sumOfProperDivisors[num]).add(parseInt(num));
    }
  }

  return [...amicablePairs].reduce((acc, curr) => acc + curr);
}

console.log(amicableNumbers(10000));
