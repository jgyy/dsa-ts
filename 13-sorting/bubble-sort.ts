const numbersb = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array: number[]): number[] {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (array[j] > array[j + 1]) {
                // Swap the numbers
                let tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;
            }
        }
    }
    return array;
}

console.log(bubbleSort(numbersb));