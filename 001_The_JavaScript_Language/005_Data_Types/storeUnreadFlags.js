let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
];

let readMessages = new WeakSet();

// two messages have been read
readMessages.add(messages[0]);
readMessages.add(messages[0]);
// readMessages has two elements

// let's read the first message again!
readMessages.add(messages[0]);
// readMessages still has 2 unique elements

messages.shift();
// now readMessages has 1 elements (technically memory may be cleaned later)