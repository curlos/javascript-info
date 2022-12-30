const count = (obj) => Object.keys(obj).length;

let user = {
    name: 'John',
    age: 30
};

alert(count(user)); // 2