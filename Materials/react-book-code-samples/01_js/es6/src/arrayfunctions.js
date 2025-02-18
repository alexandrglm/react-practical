const numbers = [7, 5, 3, 0,  4];
const dup = numbers.map( n => n*2);

console.log(dup); // dup = [ 14, 10, 6, 0, 8 ]

//const numbers = [7, 5, 3, 0,  4];
const evens = numbers.filter( n => n%2===0);

console.log(evens); // evens = [ 0, 4 ]
