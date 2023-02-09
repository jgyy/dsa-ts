const numbers = [10, 3, 15, 7, 8, 23, 98, 29];

function mergeSort(array: number[]): number[] {
    if (array.length < 2) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left: number[], right: number[]): number[] {
    const result: number[] = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left[0]);
            left.shift();
        } else {
            result.push(right[0]);
            right.shift();
        }
    }

    while (left.length) {
        result.push(left.shift()!);
    }

    while (right.length) {
        result.push(right.shift()!);
    }

    return result;
}

console.log(mergeSort(numbers));