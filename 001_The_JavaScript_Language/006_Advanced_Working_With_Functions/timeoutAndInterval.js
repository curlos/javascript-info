const printNumbersInterval = (from, to) => {
    let count = from;

    let timerId = setInterval(() => {
        console.log(count);
        count++;

        if (count > to) {
            clearInterval(timerId);
        }
    }, 1000);

    if (count >= to) {
        clearInterval(timerId);
    }
};

const printNumbersTimeout = (from, to) => {
    let count = from;

    let timerId = setTimeout(function printNum() {
        console.log(count);
        count++;

        timerId = setTimeout(printNum, 1000);

        if (count > to) {
            clearTimeout(timerId);
        }
    }, 1000);
};

printNumbersInterval(1, 3);
printNumbersTimeout(1, 3);