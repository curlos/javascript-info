const sumToIterative = (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
};

const sumToRecursive = (n) => {
    if (n === 1) {
        return n;
    }

    /*
        4 + 3 + 2 + 1 = 10
    */

    return n + sumTo(n - 1);
};

const sumTo = (n) => {
    return ((n * (1 + n)) / 2);
};

console.log(sumTo(100000));