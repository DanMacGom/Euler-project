// The number 3797 has an interesting property. Being prime itself, it is possible to continuously
// remove digits from left to right, and remain prime at each stage: 3797, 797, 97, and 7. Similarly
// we can work from right to left: 3797, 379, 37, and 3.

// Find the sum of the only eleven primes that are both truncatable from left to right and right to left.

// NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.
function objOfPrimes(n) {
  let obj = {};

  for (let i = 2; i < n; i++) {
    obj[i] = true;
  }

  for (let i = 2; i * i < n; i++) {
    if (obj[i]) {
      for (j = i * i; j < n; j += i) {
        obj[j] = false;
      }
    }
  }

  return obj;
}

function truncate(i, obj) {
  const iLen = [...i.toString()].length;
  let iRight = [...i.toString()];
  let iLeft = [...i.toString()];
  let counterRight = 0;
  let counterLeft = 0;

  while (iRight && obj[iRight.join("")] && obj[iLeft.join("")]) {
    iRight.pop();
    iLeft.shift();
    counterRight++;
    counterLeft++;
  }

  if (counterRight === counterLeft && iLen === counterRight) {
    return true;
  }

  return false;
}

function truncatablePrimes() {
  let sum = 0;
  let countPrimes = 0;
  let primes = objOfPrimes(1000000);

  const notTruncatablePrimes = ["2", "3", "5", "7"];

  for (let prop in primes) {
    if (notTruncatablePrimes.includes(prop)) {
      continue;
    }

    if (truncate(prop, primes)) {
      sum += parseInt(prop);
      countPrimes++;
    }

    if (countPrimes === 11) {
      break;
    }
  }

  return sum;
}

console.log(truncatablePrimes());
