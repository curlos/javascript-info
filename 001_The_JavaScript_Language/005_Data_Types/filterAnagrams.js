const aclean = (arr) => {
    const map = new Map();

    arr.forEach((str) => {
        const sortedStr = str.split('').sort().join().toLowerCase();
        map.set(sortedStr, str);
    });

    return [...map.values()];
};


// O (n)
const isAnagram = (str) => {

};

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));