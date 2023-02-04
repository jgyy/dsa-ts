function hasPairWithSum(arr: number[], sum: number): boolean {
    let s = new Set();
    for (let i = 0; i < arr.length; i++) {
        if (s.has(arr[i])) {
            return true;
        }
        s.add(sum - arr[i]);
    }
    return false;
}

console.log(hasPairWithSum([6, 4, 3, 2, 1, 7], 9));