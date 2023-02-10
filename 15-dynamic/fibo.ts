
function fibonacci(n: number): number {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacciMaster(): (n: number) => number {
    let cache: { [n: string]: number } = {};
    return function fib(n: number): number {
        if (n in cache) {
            return cache[n];
        } else {
            if (n <= 1) {
                return n;
            } else {
                cache[n] = fib(n - 1) + fib(n - 2);
                return cache[n];
            }
        }
    }
}

function fibonacciMaster2(n: number): number | undefined {
    let answer = [0, 1];
    for (let i = 2; i <= n; i++) {
        answer.push(answer[i - 2] + answer[i - 1]);
    }
    return answer.pop();
}

const fibonacci2 = fibonacciMaster();
console.log(fibonacci(30));
console.log(fibonacci2(1000));
console.log(fibonacciMaster2(1000));