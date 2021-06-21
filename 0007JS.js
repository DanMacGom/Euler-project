// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10 001st prime number?
function isPrime(num) {
    for (let i = num - 1; i > 1; i--) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

function getNPrimes(n) {
    let i = 1;
    let numOfPrimes = 0;

    while (numOfPrimes < n) {
        i += 1;

        if (isPrime(i)) {
            numOfPrimes += 1;
        }
    }

    return i;
}

console.log(getNPrimes(10001));
