const printList = (list) => {
    while (list && list !== null) {
        console.log(list.value);
        list = list.next;
    }
};

const printListRecursive = (list) => {
    if (!list || list === null) {
        return;
    }

    console.log(list.value);
    printList(list.next);
};

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

printList(list);