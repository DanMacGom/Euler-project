// // The prime factors of 13195 are 5, 7, 13 and 29.

// // What is the largest prime factor of the number 600851475143?

function largestPrime(n) {
    let maxPrime = 1;
    // if divisible by 2
    while (n % 2 === 0) {
        n /= 2;
    }

    // iterate from 3 to sqrt(n)
    for (let i = 3; i * i <= n; i += 2) {
        while (n % i === 0) {
            n /= i;
        }
    }

    if (n > 2) {
        maxPrime = n;
    }

    return maxPrime;
}

console.log(largestPrime(600851475143));
