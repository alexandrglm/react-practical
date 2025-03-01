
const family = new Map();
// family = Map {}

//const family = new Map({"Bob": 34, "Alice": 35});
//console.log(family);

const swords = new Map();
// swords = Map {}
swords.set("Orcrist", "Thorin");
swords.set("Foehammer", "Gandalf");
swords.set("Sting", "Bilbo");

// Map {
//  "Orcrist" => "Thorin",
//  "Foehammer" => "Gandalf",
//  "Sting" => "Bilbo" }



const tech = new Map();
// tech = Map {}

tech.set("React", {lang: "JavaScript", type: "Frontend"});
tech.set("Angular", {lang: "TypeScript", type: "Frontend"});
tech.set("Rails", {lang: "Ruby", type: "Backend"});
// Map {
//  "React" => { lang: "JavaScript", type: "Frontend" },
//  "Angular" => { lang: "TypeScript", type: "Frontend" },
//  "Rails" => { lang: "Ruby", type: "Backend" } }

console.log(tech.get("Rails"));  // { lang: "Ruby", type: "Backend" }
console.log(tech.get("Spring")); // undefined

tech.set("Angular", {lang: "Dart", type: "Frontend"});
// Map {
//  "React" => { lang: "JavaScript", type: "Frontend" },
//  "Angular" => { lang: "Dart", type: "Frontend" },
//  "Rails" => { lang: "Ruby", type: "Backend" } }

console.log(tech);
tech.delete("Angular");

console.log(tech.has("React"));
console.log(tech.has("Angular"));

console.log(tech.size); // 2
tech.clear();
console.log(tech.size); //tech.size = 0


console.log(swords.keys()); // MapIterator { "Orcrist", "Foehammer", "Sting" }
console.log(swords.values()); // MapIterator { "Thorin", "Gandalf", "Bilbo" }


console.log("for of");
for (s of swords) {
    console.log(s);
}
// [ "Orcrist", "Thorin" ]
// [ "Foehammer", "Gandalf" ]
// [ "Sting", "Bilbo" ]

console.log("for of keys");
for (sk of swords.keys()) {
    console.log(sk);
}
// Orcrist
// Foehammer
// Sting

console.log("for of values");
for (sv of swords.values()) {
    console.log(sv);
}
// Thorin
// Gandalf
// Bilbo


swords.forEach( (v, k) => {
    console.log(`${v} wields ${k}`);
});
// Thorin wields Orcrist
// Gandalf wields Foehammer
// Bilbo wields Sting


const swordIterator = swords.keys();

/*
swordIterator.next(); // { value: 34, done: false }
swordIterator.next(); // { value: 45, done: false }
swordIterator.next(); // { value: 23, done: false }
swordIterator.next(); // { value: undefined, done: true }*/

console.log(swordIterator.next()); // { value: 34, done: false }
console.log(swordIterator.next()); // { value: 45, done: false }
console.log(swordIterator.next()); // { value: 23, done: false }
console.log(swordIterator.next()); // { value: undefined, done: true }


// { value: "Orcrist", done: false }
// { value: "Foehammer", done: false }
// { value: "Sting", done: false }
// { value: undefined, done: true }

const cities = new WeakMap();

cities.set({name: "Hobbiton"}, {land: "Shire", visited: true});
cities.set({name: "Minas Tirith"}, {land: "Gondor", visited: true});
cities.set({name: "Minas Morgul"}, {land: "Mordor", visited: false});


