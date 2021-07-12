// We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly
// once; for example, the 5-digit number, 15234, is 1 through 5 pandigital.

// The product 7254 is unusual, as the identity, 39 × 186 = 7254, containing multiplicand, multiplier,
// and product is 1 through 9 pandigital.

// Find the sum of all products whose multiplicand/multiplier/product identity can be written as a 1
// through 9 pandigital.

// HINT: Some products can be obtained in more than one way so be sure to only include it once in
// your sum.

// examples:
// 12 x 345 = 6789
// 1 x 2345 = 6789
function pandigitalProducts() {
  let sumPandigitals = 0;
  let prodSet = new Set();

  for (let mult = 12; mult <= 98; mult++) {
    for (let multipl = 123; multipl <= 987; multipl++) {
      for (let prod = 1234; prod <= 9876; prod++) {
        if (!prod.toString().includes("0") && !mult.toString().includes("0") && !multipl.toString().includes("0")) {
          let set = new Set([...prod.toString(), ...mult.toString(), ...multipl.toString()]);

          if (set.size === 9 && mult * multipl === prod && !prodSet.has(prod)) {
            prodSet.add(prod);
            sumPandigitals += prod;
          }
        }
      }
    }
  }

  for (let mult = 1; mult <= 9; mult++) {
    for (let multipl = 1234; multipl <= 9876; multipl++) {
      for (let prod = 1234; prod <= 9876; prod++) {
        if (!prod.toString().includes("0") && !mult.toString().includes("0") && !multipl.toString().includes("0")) {
          let set = new Set([...prod.toString(), ...mult.toString(), ...multipl.toString()]);

          if (set.size === 9 && mult * multipl === prod && !prodSet.has(prod)) {
            prodSet.add(prod);
            sumPandigitals += prod;
          }
        }
      }
    }
  }
  return sumPandigitals;
}

console.log(pandigitalProducts());
