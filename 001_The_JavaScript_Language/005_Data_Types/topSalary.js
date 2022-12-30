const topSalary = (salaries) => {
    if (!Object.values(salaries) || Object.values(salaries).length === 0) {
        return null;
    }

    let topSalary = {};

    for (let [name, salary] of Object.entries(salaries)) {
        if (salary > topSalary.salary || !topSalary.salary) {
            topSalary = {
                name,
                salary
            };
        }
    }

    const { name } = topSalary;

    return name;
};

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log(topSalary(salaries));