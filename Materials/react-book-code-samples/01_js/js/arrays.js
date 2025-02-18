var numbers = [3, 5, 7, 38, 0, -4, 3];
var names = ['John', 'Alice', 'Bob'];

var myArray = new Array ();
myArray[0] = 36;
myArray[1] = 33;
myArray[2] = 23;

var myNames = new Array ();
myNames[0] = 'John';
myNames[1] = 'Alice';
myNames[2] = 'Bob';


var names = new Array ('John', 'Alice', 'Bob');
var weights = new Array (34.5, 24.76, 45.6, 20.56, 45.4);


let result = [4, 5, 6, 3, 2].find (element => element === 6); // 6
result = [4, 5, 6, 3, 2].find (function (element) {
	return element === 6;
}); // 6
console.log (result);


result = [4, 5, 6, 3, 2].findIndex (element => element === 6); // 2
console.log (result);

result = [4, 5, 6, 3, 2].reduce ((a, b) => a + b, 0); //20
console.log (result);

result = [4, 5, 6, 3, 2].sort ((a, b) => a > b); // [2, 3, 4, 5, 6]
console.log (result);
result = [4, 5, 6, 3, 2].sort ((a, b) => a < b); // [6, 5, 4, 3, 2]
console.log (result);

result = [4, 5, 6, 3, 2].includes (a => a > 5); // [2, 3, 4, 5, 6]
console.log (result);

const numbers =[4, 5, 6, 3, 2];
numbers.forEach (number => {
	console.log(number);
});

numbers.forEach ((number, index) => {
	console.log(index + ": "+ number);
});