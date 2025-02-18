const players = new Set();
// players = Set {}

players.add(34); // Set { 34 }
players.add(45); // Set { 34, 45 }
players.add(6);  // Set { 34, 45, 6 }
players.add(34); // Set { 34, 45, 6 }

//players.delete(6);
console.log(players.delete(6)); // true
console.log(players.delete(666)); // false

if (players.has(34)) {
    console.log("Player 34 is in.")
}

players.has(34); // true
players.has(10);  // false

// players.size =  2
console.log(players.size); // 2
players.add(23);           // players.size = 3


//players.clear(); // players = Set {}


players.values(); // SetIterator { 34, 45, 23 }
players.keys(); // SetIterator { 34, 45, 23 }

for (p of players) {
    console.log(p);
}

for (p of players.keys()) {
    console.log(p);
}

const playerIterator = players.values();

playerIterator.next(); // { value: 34, done: false }
playerIterator.next(); // { value: 45, done: false }
playerIterator.next(); // { value: 23, done: false }
playerIterator.next(); // { value: undefined, done: true }






// Set { 34, 45, 6 }
const bestPlayers = new Set([23, 99, 15, 4]);
// bestPlayers = Set { 23, 99, 15, 4 }

const friends = new WeakSet([{ name: "Will"}, { name: "Mike"}]);
console.log(friends);
friends.add({name: "Dustin"});
friends.add({name: "Lucas"});

console.log(friends);

