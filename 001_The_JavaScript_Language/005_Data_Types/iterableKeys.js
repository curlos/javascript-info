let map = new Map();

map.set("name", "John");

let keys = [...map.keys()];
console.log(keys);

// Error: keys.push is not a function
keys.push("more");
console.log(keys);