function Calculator() {
    this['+'] = (a, b) => {
        return a + b;
    };
    this['-'] = (a, b) => {
        return a - b;
    };

    this.isSupportedOperator = (operator) => {
        if (this[operator]) {
            return true;
        }

        return false;
    };

    this.calculate = (str) => {
        const question = str.split(' ');
        let total = question[0];
        let i = 1;

        // ['3', '+', '7']

        while (i < question.length) {
            let currChar = question[i];

            if (isNaN(currChar)) {
                const isSupportedOperator = this.isSupportedOperator(currChar);

                if (isSupportedOperator) {
                    const firstNum = Number(total);
                    const secondNum = Number(question[i + 1]);
                    const operator = currChar;

                    if (i === 0 ||
                        i === question.length - 1 ||
                        !firstNum ||
                        !secondNum) {
                        throw Error(`ERROR: Format must be 'NUMBER OPERATOR NUMBER'`);
                    }

                    total = (this[operator](firstNum, secondNum));
                    i += 2;

                } else {
                    throw Error(`ERROR: Operator ${currChar} NOT supported.`);
                }
            } else {
                i++;
            }
        }

        return total;
    };

    this.addMethod = (operator, func) => {
        this[operator] = func;
        return this;
    };
}

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("12 + 34");
alert(result); // 8