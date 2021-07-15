// Take the number 192 and multiply it by each of 1, 2, and 3:

// 192 × 1 = 192
// 192 × 2 = 384
// 192 × 3 = 576
// By concatenating each product we get the 1 to 9 pandigital, 192384576. We will call 192384576 the
// concatenated product of 192 and (1,2,3)

// The same can be achieved by starting with 9 and multiplying by 1, 2, 3, 4, and 5, giving the pandigital,
// 918273645, which is the concatenated product of 9 and (1,2,3,4,5).

// What is the largest 1 to 9 pandigital 9-digit number that can be formed as the concatenated product
// of an integer with (1,2, ... , n) where n > 1?
function stringPermutations(str) {
  if (str.length <= 2) {
    return str.length === 2 ? [str, str[1] + str[0]] : [str];
  }

  return str
    .split("")
    .reduce(
      (acc, letter, i) => acc.concat(stringPermutations(str.slice(0, i) + str.slice(i + 1)).map((val) => letter + val)),
      []
    );
}

function pandigitalMultiples() {
  let pandigitalString = "987654321";
  let perms = stringPermutations(pandigitalString);
  let concat = "";

  let j = 1;
  for (let perm of perms) {
    for (let n = 2; n.toString().length < pandigitalString.length; n++) {
      j = 1;
      while (concat.length < perm.length) {
        concat += (j * n).toString();

        j++;
      }

      if (concat === perm) {
        return [perm, n, j];
      }

      concat = "";
    }
  }
}

console.log(pandigitalMultiples());
