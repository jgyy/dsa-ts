function reverse(str: string): string {
    if (!str || str.length < 2 || typeof str !== "string") {
        return "hmm that is not good";
    }

    const backwards: string[] = [];
    const totalItems: number = str.length - 1;
    for (let i = totalItems; i >= 0; i--) {
        backwards.push(str[i]);
    }
    return backwards.join("");
}

function reverse2(str: string): string {
    return str.split("").reverse().join("");
}

const reverse3 = (str: string): string => str.split("").reverse().join("");

console.log(reverse("Hi my name is jgyy"));
console.log(reverse2("Hi my name is jgyy"));
console.log(reverse3("Hi my name is jgyy"));