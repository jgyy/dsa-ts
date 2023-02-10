function addto80(n: number): number {
    return n + 80;
}

function memoizedAddTo80(): (n: number) => number {
    let cache: { [n: string]: number } = {};
    return (n: number): number => {
        if (n in cache) {
            return cache[n];
        } else {
            console.log('long time');
            cache[n] = n + 80;
            return cache[n];
        }
    }
}

const memoized = memoizedAddTo80();
console.log(addto80(5));
console.log(memoized(5));
console.log(memoized(5));