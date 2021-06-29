// Euler discovered the remarkable quadratic formula:

// n² + n + 41

// It turns out that the formula will produce 40 primes for the consecutive integer values 0 <= n <= 39.
// However, when n=40, 40²+40+41=40(40+1)+41 is divisible by 41, and certainly when n=41, 41²+41+41
// is clearly divisible by 41.

// The incredible formula n²-79n+1601 was discovered, which produces 80 primes for the consecutive
// values 0<=n<=79. The product of the coefficients, -79 and 1601, is -126479.
// The product of the coefficients, −79 and 1601, is −126479.

// Considering quadratics of the form:
// n² + an + b, where |a| < 1000 and |b| <= 1000

// where |n| is the modulus/absolute value of n

// Find the product of the coefficients, a and b, for the quadratic expression that produces the
// maximum number of primes for consecutive values of n, starting with n=0.
function isPrime(num) {
  for (let i = num - 1; i > 1; i--) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function quadraticPrimes() {
  let maxConsecutivePrimes = 0;
  let n = 0;
  let maxab = 0;

  for (let a = -1000; a <= 1000; a++) {
    for (let b = -1000; b <= 1000; b++) {
      n = 0;
      while (isPrime(Math.abs(n * n + a * n + b))) {
        n++;
      }

      if (n > maxConsecutivePrimes) {
        maxConsecutivePrimes = n;
        maxab = a * b;
        console.log(a * b);
      }
    }
  }

  return maxab;
}

console.log(quadraticPrimes());
