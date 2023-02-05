function mergeSortedArrays(array: number[], array2: number[]): number[] {
    const mergedArray: number[] = [];
    let arrayItem: number = array[0];
    let array2Item: number = array2[0];
    let i: number = 1;
    let j: number = 1;

    // Check input
    if (array.length === 0) {
        return array2;
    }
    if (array2.length === 0) {
        return array;
    }

    while (arrayItem || array2Item) {
        if (!array2Item || arrayItem < array2Item) {
            mergedArray.push(arrayItem);
            arrayItem = array[i];
            i++;
        } else {
            mergedArray.push(array2Item);
            array2Item = array2[j];
            j++;
        }
    }
    return mergedArray;

}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));