const numbers = [5, 42, 15];

const iterator = numbers[Symbol.iterator]();

iterator.next(); // { value: 5, done: false }
iterator.next(); // { value: 42, done: false }
iterator.next(); // { value: 15, done: false }
iterator.next(); // { value: undefined, done: true }
