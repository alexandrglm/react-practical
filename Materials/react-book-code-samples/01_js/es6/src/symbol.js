const something = Symbol();
// something = Symbol()

const other = Symbol("Just a description");
// other = Symbol(Just a description)

let backpack = {};

backpack = {
    "bottle" : { brand: "Laken" , color: "silver"},
    "helmet" : { brand: "Petzl", color: "red"},
    "pick" : { brand: "Petzl", color: "black"},
    "helmet" : { brand: "Petzl", color: "yellow"}
};

console.log(backpack);
// { bottle: { brand: "Laken", color: "silver" },
//  helmet: { brand: "Petzl", color: "yellow" },
//  pick: { brand: "Petzl", color: "black" } }

backpack = {
    [Symbol("bottle")] : { brand: "Laken" , color: "silver"},
    [Symbol("helmet")] : { brand: "Petzl", color: "red"},
    [Symbol("pick")] : { brand: "Petzl", color: "black"},
    [Symbol("helmet")] : { brand: "Petzl", color: "yellow"}
};

// { [Symbol(bottle)]: { brand: "Laken", color: "silver" },
//  [Symbol(helmet)]: { brand: "Petzl", color: "red" },
//  [Symbol(pick)]: { brand: "Petzl", color: "black" },
//  [Symbol(helmet)]: { brand: "Petzl", color: "yellow" } }

console.log(backpack);

const helmet1 = Symbol("helmet");
const helmet2 = Symbol("helmet");

// helmet1 == helmet2  = false