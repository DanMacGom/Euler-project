// The Fibonacci sequence is defined by the recurrence relation:

// Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.
// Hence the first 12 terms will be:

// F1 = 1
// F2 = 1
// F3 = 2
// F4 = 3
// F5 = 5
// F6 = 8
// F7 = 13
// F8 = 21
// F9 = 34
// F10 = 55
// F11 = 89
// F12 = 144
// The 12th term, F12, is the first term to contain three digits.

// What is the index of the first term in the Fibonacci sequence to contain 1000 digits?

function fibonacci(n) {
  let fibo = [0n, 1n];
  for (let i = 2; i <= n; i++) {
    let res = fibo[i - 1] + fibo[i - 2];
    fibo.push(res);
  }

  return BigInt(fibo[fibo.length - 1]);
}

function fibonacciLength(len) {
  let i = 12;
  while (fibonacci(i).toString().length < len) {
    i++;
  }

  return i;
}

console.log(fibonacciLength(1000));

// console.log(fibonacci(5800));
