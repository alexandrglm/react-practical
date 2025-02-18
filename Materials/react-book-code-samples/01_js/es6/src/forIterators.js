
let names = ["John", "Alice", "Bob", "Jane"];

for (let i = 0; i< names.length; i++) {
    console.log(names[i]);
}
// John
// Alice
// Bob
// Jane

for (i in names) {
    console.log(i, names[i]);
}
// 0 John
// 1 Alice
// 2 Bob
// 3 Jane


for (name of names) {
    console.log(name);
}
// John
// Alice
// Bob
// Jane

let people = [
    {name: "John", age: 44},
    {name: "Alice", age: 43},
    {name: "Bob", age: 20},
    {name: "Jane", age: 21}
];



for (name of names) {
    console.log(name);
}

// John
// Alice
// Bob
// Jane

for (person of people) {
    console.log(person);
}
// { name: "John", age: 44 }
// { name: "Alice", age: 43 }
// { name: "Bob", age: 20 }
// { name: "Jane", age: 21 }

let book = {
    title: "Atomic book of React",
    author: "Pello Altadill",
    ISBN: "none",
    isGood: true,
    score: 9,
    topics: ["React.js", "Redux", "React Native","ES6"]
};

for (b in book) {
    console.log(`${b}: ${book[b]}`);
}
// title: Atomic book of React
// author: Pello Altadill
// ISBN: none
// isGood: true
// score: 9
// topics: React.js,Redux,React Native,ES6
