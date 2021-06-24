// Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

// How many such routes are there through a 20×20 grid?
function factorial(n) {
  if (n === 1 || n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
}

function pathsInLattice(n) {
  // Central binomial coefficient:
  const res = factorial(2 * n) / (factorial(n) * factorial(n));

  return res;
}

console.log(pathsInLattice(20));
