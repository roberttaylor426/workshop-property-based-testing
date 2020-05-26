export function add(numbers: number[]) {
    const result = numbers.reduce((acc, n) => {
        return acc + n;
    }, 0);

    if (Number.isSafeInteger(result)) {
        return result;
    }

    throw "too big";
}
