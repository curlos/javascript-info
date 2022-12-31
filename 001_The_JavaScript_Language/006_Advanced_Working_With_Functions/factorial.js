// O (n) time || O(1) space
const factorial = (n) => {
    if (n < 1) {
        return 0;
    }

    if (n === 1) {
        return n;
    }
    // 5 * 4 * 3 * 2 * 1
    return n * factorial(n - 1);
};

console.log(factorial(77));