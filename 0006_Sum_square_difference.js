// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
function sumSquareDifference() {
  const sumSquares = [...Array(101).keys()]
    .filter((num) => num !== 0)
    .reduce((accumulator, currentValue) => accumulator + currentValue * currentValue);

  const squareOfSum = [...Array(101).keys()].filter((num) => num !== 0).reduce((acc, curr) => acc + curr);

  return squareOfSum * squareOfSum - sumSquares;
}

console.log(sumSquareDifference());
