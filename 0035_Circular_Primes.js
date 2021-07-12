// The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719,
// are themselves prime.

// There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.

// How many circular primes are there below one million?
function arrayOfPrimes(n) {
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

function circularPrimes(n) {
  let iString = [];
  let primeCount = 1;
  let trueCount = 0;
  let arr = [];
  const primes = arrayOfPrimes(n);

  for (let i = 3; i < n; i += 2) {
    iString = i.toString();
    iLen = iString.length;
    arr = [...i.toString()];

    while (primes[arr.join("")]) {
      trueCount += 1;
      arr.push(arr.shift());

      if (iLen === trueCount) {
        break;
      }
    }

    primeCount += trueCount === iLen;
    trueCount = 0;
  }

  return primeCount;
}

console.log(circularPrimes(1000000));
