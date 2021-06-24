// If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

// If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?

// NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.
function countWrittenNumbersOneToAThousand() {
  const dict = {
    0: "",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
    100: "onehundred",
    200: "twohundred",
    300: "threehundred",
    400: "fourhundred",
    500: "fivehundred",
    600: "sixhundred",
    700: "sevenhundred",
    800: "eighthundred",
    900: "ninehundred",
    1000: "onethousand",
  };

  let numInLetters = "";

  function handleMoreThanOrEqual100(i) {
    if (i.toString()[1] === "0" && i.toString()[2] === "0") {
      return dict[i];
    } else {
      return dict[i.toString()[0]] + "hundredand";
    }
  }

  function handle20to99(i) {
    return dict[i.toString()[0] + "0"] + dict[i.toString()[1]];
  }

  for (let i = 1; i <= 1000; i++) {
    let current_i = i;

    if (i >= 100 && i <= 999) {
      numInLetters += handleMoreThanOrEqual100(i);
      // Get tens.
      i = parseInt(i.toString()[1] + i.toString()[2]);
    }

    if (i >= 20 && i < 100) {
      numInLetters += handle20to99(i);
    } else if (i < 20 || i === 1000) {
      numInLetters += dict[i];
    }

    i = current_i;
  }

  return numInLetters.length;
}

console.log(countWrittenNumbersOneToAThousand());
