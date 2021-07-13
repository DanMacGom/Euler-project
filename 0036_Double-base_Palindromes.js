// The decimal number, 585 = 1001001001_2 (binary), is palindromic in both bases.

// Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.

// (Please note that the palindromic number, in either base, may not include leading zeros.)
function doubleBasePalindromes() {
  let sum = 0;

  for (let i = 1; i < 1000000; i++) {
    sum +=
      [...i.toString()].join("") === [...i.toString()].reverse().join("") &&
      [...i.toString(2)].join("") === [...i.toString(2)].reverse().join("")
        ? i
        : 0;
  }

  return sum;
}

console.log(doubleBasePalindromes());
