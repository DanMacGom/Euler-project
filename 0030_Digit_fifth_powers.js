// Surprisingly there are only three numbers that can be written as the sum of fourth powers of their digits:

// 1634 = 1^4 + 6^4 + 3^4 + 4^4
// 8208 = 8^4 + 2^4 + 0^4 + 8^4
// 9474 = 9^4 + 4^4 + 7^4 + ^44
// As 1 = 1^4 is not a sum it is not included.

// The sum of these numbers is 1634 + 8208 + 9474 = 19316.

// Find the sum of all the numbers that can be written as the sum of fifth powers of their digits.

function digitFifthPowers() {
  let digits = [];
  let string_i = "";

  for (let i = 2; i <= 999999; i++) {
    string_i = i.toString();

    // console.log(string_i[0] ? Math.pow(parseInt(string_i[0]), 5) : 0 + 3);

    if (
      i ===
      (string_i[0] ? Math.pow(parseInt(string_i[0]), 5) : 0) +
        (string_i[1] ? Math.pow(parseInt(string_i[1]), 5) : 0) +
        (string_i[2] ? Math.pow(parseInt(string_i[2]), 5) : 0) +
        (string_i[3] ? Math.pow(parseInt(string_i[3]), 5) : 0) +
        (string_i[4] ? Math.pow(parseInt(string_i[4]), 5) : 0) +
        (string_i[5] ? Math.pow(parseInt(string_i[5]), 5) : 0)
    ) {
      digits.push(i);
    }
  }

  return digits.reduce((acc, curr) => acc + curr);
}

console.log(digitFifthPowers());
