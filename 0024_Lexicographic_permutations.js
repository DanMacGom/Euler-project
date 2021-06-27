// A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of
// the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically,
// we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:

// 012   021   102   120   201   210

// What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?
var permArr = [],
  usedChars = [];

function permute(input) {
  var i, ch;

  for (i = 0; i < input.length; i++) {
    ch = input.splice(i, 1)[0];
    usedChars.push(ch);
    if (input.length == 0) {
      permArr.push(usedChars.slice().join(""));
    }
    permute(input);
    input.splice(i, 0, ch);
    usedChars.pop();
  }

  return permArr[1000000 - 1];
}

console.log(permute([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
