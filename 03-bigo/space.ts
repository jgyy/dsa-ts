function boo(n: number[]) {
    n.forEach((x) => {
        console.log(`${x} boo!`);
    });
}

boo([1, 2, 3, 4, 5]);

function arrayOfHiNTimes(n: number): string[] {
    return Array(n).fill("hi");
}

arrayOfHiNTimes(5).forEach((x) => console.log(x));
