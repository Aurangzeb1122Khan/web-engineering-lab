
export function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

export function makeCounter(start = 0) {
    let count = start;

    return function () {
        count += 1;
        return count;
    };
}
