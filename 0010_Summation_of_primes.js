// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.
// https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes#Pseudocode
function sumOfPrimesUntilMaxNumber(num) {
  let arr = new Array(num).fill(true);

  arr[0] = arr[1] = false;

  for (i = 2; i * i < num; i++) {
    if (arr[i]) {
      for (let j = i * i; j < num; j += i) {
        arr[j] = false;
      }
    }
  }

  return arr.map((val, index) => (val === true ? index : 0)).reduce((acc, curr) => acc + curr);
}

console.log(sumOfPrimesUntilMaxNumber(2000000));
