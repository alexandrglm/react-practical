function* count(){
    for (var i = 0; i < 3; i++) {
        // This is stops the execution
        yield i;
    }
}

const iterator = count();

console.log(iterator.next()); // { value: 0, done: false }
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: undefined, done: true }


function* greet() {
    let msg = yield;
    console.log(`The message is ${msg}`);
}

const greetIterator = greet();
greetIterator.next();
greetIterator.next("Hello there");
// The message is Hello there

function* invoice (items){
    let total = 0;
    for (item of items) {
        let cost = yield item.id;
        console.log(cost, item);
        total = total + cost * item.qty;
    }
    yield total;
}

const prices = { 1: 42.0, 5: 66.6}
const purchase = [{id: 1, qty: 3},{ id: 5, qty: 2}];
const invoiceIterator = invoice(purchase);

console.log(invoiceIterator.next()); // Starts running.

console.log(invoiceIterator.next(prices[1])); // { value: 1, done: false }
console.log(invoiceIterator.next(prices[5])); // { value: 5, done: false }

console.log(invoiceIterator.next()); // { value: 259.2, done: false }

invoiceIterator.next(); // { value: undefined, done: true }




/*for (var x of count()) {
    console.log(x);
}*/