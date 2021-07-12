// The fraction 49/98 is a curious fraction, as an inexperienced mathematician in attempting to
// simplify it may incorrectly believe that 49/98 = 4/8, which is correct, is obtained by cancelling the 9s.

// We shall consider fractions like, 30/50 = 3/5, to be trivial examples.

// There are exactly four non-trivial examples of this type of fraction, less than one in value, and
// containing two digits in the numerator and denominator.

// If the product of these four fractions is given in its lowest common terms, find the value of
// the denominator.
function gcd(a, b) {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
}

function digitCancellingFractions() {
  let numProd = 1;
  let denProd = 1;

  for (let n = 11; n <= 99; n++) {
    for (let d = 99; d > n; d--) {
      let nString = n.toString();
      let dString = d.toString();

      if (
        n % 10 !== 0 &&
        d % 10 !== 0 &&
        nString[1] === dString[0] &&
        n / d === parseInt(nString[0]) / parseInt(dString[1])
      ) {
        numProd *= n;
        denProd *= d;
      }
    }
  }

  return denProd / gcd(numProd, denProd);
}

console.log(digitCancellingFractions());
