// 145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.

// Find the sum of all numbers which are equal to the sum of the factorial of their digits.

// Note: As 1! = 1 and 2! = 2 are not sums they are not included.

// 9! + 9! + 9! + 9! + 9! + 9! + 9! + 9! = 2903040 -> Not possible. More factorials than digits.
function factorial(n) {
  if (n === 1 || n === 0) {
    return 1;
  }

  return factorial(n - 1) * n;
}

function digitFactorials() {
  const obj = {};
  let sumTotal = 0;
  let sums = 0;

  for (let i = 0; i <= 9; i++) {
    obj[i] = factorial(i);
  }

  for (let i = 10; i <= 7 * obj[9]; i++) {
    for (let j of [...i.toString()]) {
      sums += obj[j];
    }

    if (parseInt(sums) === i) {
      sumTotal += i;
    }

    sums = 0;
  }

  return sumTotal;
}

console.log(digitFactorials());
