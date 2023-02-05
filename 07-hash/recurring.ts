function firstRecurringCharacter(input: number[]): number | null {
    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            if (input[i] === input[j]) {
                return input[i];
            }
        }
    }
    return null;
}

function firstRecurringCharacter2(input: number[]): number | null {
    const map = new Map<number, boolean>();
    for (const item of input) {
        if (map.has(item)) {
            return item;
        }
        map.set(item, true);
    }
    return null;
}

console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4])); // 2
console.log(firstRecurringCharacter2([2, 5, 1, 2, 3, 5, 1, 2, 4])); // 2
