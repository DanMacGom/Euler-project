// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
function fibonacci(limit) {
    let memo = [1, 2];

    for (let i = 2; memo[i - 1] + memo[i - 2] < limit; i++) {
        memo[i] = memo[i - 2] + memo[i - 1];
    }

    memo = memo.filter((a) => a % 2 === 0);

    console.log(memo);
    return memo.reduce((a, b) => a + b, 0);
}

console.log(fibonacci(4000000));