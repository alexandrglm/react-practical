// Destructuring - Extracting values

const names = ["Sam","Gimli","Frodo","Legolas","Pippin"];
const [loyal, dwarf, hero, elf, naughty] = names;


const names = ["Sam","Gimli","Frodo","Legolas","Pippin"];
const [loyal,,hero,,naughty] = names;

// loyal = "Sam"
// hero = "Frodo"
// naughty = "Pippin"

const character = {
    name: "Gandalf",
    nickname: "The Grey",
    age: 1024,
    weapons: ["Foe Hammer", "Staff"]
};

const {name, weapons} = character;

// name = "Gandalf"
// weapons = ["Foe Hammer", "Staff"]