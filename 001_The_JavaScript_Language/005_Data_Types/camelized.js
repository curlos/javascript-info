const camelize = (str) => {
    if (!str || str.length === 0) {
        return str;
    }

    const splitStrArr = str.split('-').map((strVal, i) => {
        if (i === 0) {
            return strVal.toLowerCase();
        }

        return `${strVal[0].toUpperCase()}${strVal.slice(1,).toLowerCase()}`;
    });

    return splitStrArr.join('');
};

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));