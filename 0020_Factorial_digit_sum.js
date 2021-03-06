// n! means n × (n − 1) × ... × 3 × 2 × 1

// For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
// and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

// Find the sum of the digits in the number 100!
function factorial(n) {
  if (n === 1 || n === 0) {
    return 1;
  }
  return BigInt(n) * BigInt(factorial(n - 1));
}

function factorialSum(n) {
  const fact = factorial(n).toString();
  let sum = 0;

  for (let num of fact) {
    sum += parseInt(num);
  }

  return sum;
}

console.log(factorialSum(100));
