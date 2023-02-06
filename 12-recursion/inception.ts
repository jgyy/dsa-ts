let counter = 0;

export function inception(): string | undefined {
    counter++;
    if (counter > 3) {
        return 'done!';
    }
    return inception();
}

console.log(inception());
