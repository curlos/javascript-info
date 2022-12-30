const sumSalaries = (salaries) => {
    if (!Object.values(salaries) || Object.values(salaries).length === 0) {
        return 0;
    }

    return Object.values(salaries).reduce((prevVal, currVal) => prevVal + currVal);
};

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

alert(sumSalaries(salaries)); // 650