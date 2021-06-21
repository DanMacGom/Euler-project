// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.
function checkIfPalindrome(num) {
    const n = [...String(num)];
    const m = [...String(num)].reverse();

    return n
        .map((letter, index) => letter === m[index])
        .every((v) => v === true);
}

function maxPalindromeProductOf3DigitNumbers() {
    let n = 999;
    let m = 999;
    let i = n * m;
    let palindromes = [];

    while (!checkIfPalindrome(i) && i > 0) {
        if (n - m === 1) {
            n -= 1;
            i = n * m;
        } else {
            m -= 1;
            i = n * m;
        }

        console.log(n, m, i, checkIfPalindrome(i));
    }

    palindromes.push(i);

    for (let j = 999; j > 1; j--) {
        for (let k = 999; k > 1; k--) {
            i = j * k;
            if (checkIfPalindrome(i)) {
                palindromes.push(i);
            }
        }
    }

    return Math.max(...palindromes);
}

console.log(maxPalindromeProductOf3DigitNumbers());
