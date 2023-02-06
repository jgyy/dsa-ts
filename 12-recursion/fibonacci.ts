function fibbonacciIterative(n: number): number {
    let arr = [0, 1];
    for (let i = 2; i <= n; i++) {
        arr.push(arr[i - 2] + arr[i - 1]);
    }
    return arr[n];
}

function fibbonacciRecursive(n: number): number {
    if (n < 2) {
        return n;
    }
    return fibbonacciRecursive(n - 1) + fibbonacciRecursive(n - 2);
}

console.log(fibbonacciIterative(40));
console.log(fibbonacciRecursive(40));
