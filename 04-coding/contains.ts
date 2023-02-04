const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'i'];

function containsCommonItem(arr1: string[], arr2: string[]): boolean {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                return true;
            }
        }
    }
    return false;
}

function containsCommonItem2(arr1: string[], arr2: string[]): boolean {
    let map: { [k: string]: boolean } = {};
    for (let i = 0; i < arr1.length; i++) {
        if (!map[arr1[i]]) {
            const item = arr1[i];
            map[item] = true;
        }
    }
    for (let j = 0; j < arr2.length; j++) {
        if (map[arr2[j]]) {
            return true;
        }
    }
    return false;
}

function containsCommonItem3(arr1: string[], arr2: string[]): boolean {
    return arr1.some(item => arr2.includes(item));
}

console.log(containsCommonItem(array1, array2));
console.log(containsCommonItem2(array1, array2));
console.log(containsCommonItem3(array1, array2));