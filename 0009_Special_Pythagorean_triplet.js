// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

// a^2 + b^2 = c^2
// For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.
function pythagoreanTriplet() {
  let triplet = [];

  for (let a = 1; a < 1000; a++) {
    for (let b = 1; b < 1000; b++) {
      for (let c = 1; c < 1000; c++) {
        if (a < b && b < c && a + b + c === 1000 && a * a + b * b === c * c) {
          triplet.push(a, b, c);
        }
      }
    }
  }

  return triplet.reduce((acc, curr) => acc * curr);
}

console.log(pythagoreanTriplet());
