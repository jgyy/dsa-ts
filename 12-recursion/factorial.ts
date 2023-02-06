function findFactorialRecursive(number: number): number {
    if (number <= 2) {
        return number;
    }
    return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number: number): number {
    let answer = 1;
    if (number === 2) {
        answer = 2;
    }
    for (let i = 2; i <= number; i++) {
        answer = answer * i;
    }
    return answer;
}

console.log(findFactorialRecursive(11));
console.log(findFactorialIterative(11));
