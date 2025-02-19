# Chapter 01:    JavaScript

Part 1 - BEFORE ECMA Script Version 6

Part 2 - AFTER ES6

****

# Pre-ES6 era:

****

# Basic Syntax

* Interpreted Language (not compiled).  

* Weak typed language.  

* Case Sensitive

* Zero-based

* Syntax similar to C

****

## Comments

```js
// This is a single comment
/*
This is a multiline
comment
*/
```

✅ Best Practices:

* Code clean precets tells not to use a lot.

****

## Variables

* `let` / `const` 

* ✅ Best Practices:
  `var` is a deprected way to declare a variable, it should be passed to `let`.

* If var/let is ommited, the variable gets global scope.
  
  ```js
  other = 42        // Global scope variable
  let other = 42    // Local scope variable
  ```

* Semicolon or not?
  
  It's not unusual to see a semicolon ";" at the end of a sentence.  It is not mandatory unless you want to put two or more sentences on a line.
  
  ```js
  // One sentence per line
  let number
  let counter = 0
  let a, b = 32, c = 4
  let x, y, z
  x = y = z = 0
  ```

  // Many sentences per line
  let number;let counter = 0;let a, b = 32, c = 4;let x, y, z;x = y = z = 0;

```
✅ Best Practices:  

* One var per line.

* One sentence per line.

* Use semicolons anyway

****

## Strings

* Quotations `' '`, doble quotations `" "`.

* Backslashes:

* Tabulations: `\t`

* Breaks: `\n`

* Quotes: `\"`

* Backslash: `\\`

```js
var name = 'Pello';
var surname = "Altadill";
var phrase = "These aren't the droids you're looking for";
var greet = 'Hello world';
var sheSaid = "We'll be \"friends\"";
```

****

## Numbers

```js
var counter = 0;
var age = -35;
var weight = 5.673;
var huge = 23e3;
var chuckNorrisStrength = Infinity;
var chuckNorrisFear = -Infinity;
```

#### Very high numbers can use `_` as comma separator

```js
let money = 5_673_453    # 5673453
let price = 1034_35      # 1034.35
```

### null

`Null` is a number. As seen in other programming languages, Null is something already defined but empty.  

```js
let something = null;
```

### undefined

`undefined` is something whose content hasn't been already defined.

```js
let a = b + 1;    // ERROR! b in undefined
```

### NaN

`NaN` is something returned when the result is `Not a Number`.

```js
let number = 'example'
typeof number * 666;     // NaN
```

****

### `typeof` and `delete`

Both operators can handle, first, the type of a variable, then, remove its content.

```js
let beast = 666;
typeof beast;    // "number"
delete beast;    
typeof beast;    // undefined
```

****

## Booleans

`true` or `false`.  

```js
let reactRules = true
let iAmInmortal = false
```

#### Falsy values

JS considers some values as **falsy**, so usable when creating conditional expressions:

* `null`

* `"  "` - An empty string

* `undefined`

* 0

* `NaN`

****

# Operators

* Arithmeticals

* Comparatives

* Booleans

## Arithmetical operators

| **TYPES**       | **OPERATORS**              | **EXAMPLE**                  |
| --------------- | -------------------------- | ---------------------------- |
| **Arithmetic**  | `+` (addition)             | `a + b`                      |
|                 | `-` (subtraction)          | `a - b`                      |
|                 | `*` (multiplication)       | `a * b`                      |
|                 | `/` (division)             | `a / b`                      |
|                 | `%` (modulus)              | `a % b`                      |
| **Unary**       | `++` (increment)           | `a++`, `++a`                 |
|                 | `--` (decrement)           | `a--`, `--a`                 |
| **Assignment**  | `+=` (add and assign)      | `a += b` // `a = a + b`      |
|                 | `-=` (subtract and assign) | `a -= b` // `a = a - b`      |
|                 | `*=` (multiply and assign) | `a *= b` // `a = a * b`      |
|                 | `/=` (divide and assign)   | `a /= b` // `a = a / b`      |
|                 | `%=` (modulus and assign)  | `a %= b` // `a = a % b`      |
| **Sign Change** | `-` (negation)             | `a = 5; b = -a;` // `b = -5` |

They can be also converted into different types (using some .methods() ).  

```js
// String to Numbers
a = '5';
Integer.parseInt(a);    // a = 5


b = "4.22"
Float.parseFloat(b);    // b = 4.22


// String to number using +var

c = '10'
console.log(c)          // "10"
console.log(+c)         // 10      
```

****

## Comparative operators

| **OPERATORS** | **DESCRIPTION**          | **EXAMPLE**          |
| ------------- | ------------------------ | -------------------- |
| `>`           | Greater than             | `5 > 4` // `true`    |
| `<`           | Less than                | `5 < 4` // `false`   |
| `>=`          | Greater than or equal to | `5 >= 4` // `true`   |
| `<=`          | Less than or equal to    | `5 <= 4` // `false`  |
| `==`          | Equal to                 | `5 == 4` // `false`  |
| `!=`          | Not equal to             | `5 != 4` // `true`   |
| `===`         | Equal in value and type  | `5 === 4` // `false` |
| `!==`         | Not equal in type        | `5 !== 4` // `true`  |

Examples using doubtly values:

```js
2 == 2        // true
2 == '2'      // true

2 != 4        // true
2 != 2        // false

2 === '2'     // false - Strictely NOT equal to a string
42 === 42     // true


2 !== '2'     // true - Based on int vs string comparision
2 !== 2       // false
```

****

## Boolean Operators

| **OPERATORS** | **SYMBOL** | **DESCRIPTION**                                          | **EXAMPLE**                                 |
| ------------- | ---------- | -------------------------------------------------------- | ------------------------------------------- |
| **AND**       | `&&`       | Returns `true` only if both operands are `true`.         | `true && true` =  `true`                    |
|               |            |                                                          | `true && false` =  `false`                  |
|               |            |                                                          | `false && true` =  `false`                  |
|               |            |                                                          | `false && false` =  `false`                 |
| **OR**        | `\|        | `                                                        | Returns `true` when any operators are true. |
|               |            |                                                          | `true` \|                                   |
|               |            |                                                          | `false` \|                                  |
|               |            |                                                          | `false` \|                                  |
| **NOT**       | `!`        | Unary operator that returns the opposite of the operand. | `!true` = `false`                           |
|               |            |                                                          | `!false` = `true`                           |

⚠️ `&&` and `||` operators perform a logical shortcut to avoid evaulate the entire expression:

* `&& shortcut`:    If the first operand is FALSE, next won't be evaluated. 

* `|| shortcut:`   If the first operand is TRUE, next won't be evaluated (as we, logically, understand that the second is also TRUE).

⚠️ Syntax for evaulate BOTH operands:  

```js
operand1 & operand2

operand1 | operand2
```

****

## Boolean initializations

JavaScript allows for conditional initialization of variables using boolean operators.  

 For instance, if it's uncertain whether a variable's value is assignable, the `||` operator can be used to assign an alternative value. In the following example, if `a` is falsy, `b` will be initialized with `0`.

```js
let b = a || 0;
```




Conversely, the `&&` operator can be used to assign a value only if the condition is truthy:

```js
let b = a && a.field;
```

****

# Arrays

Arrays are variables that contain a collection of values indexed numerically, starting from `0`. They are fundamental structures in JavaScript and can hold any type of data.

### Basic Array Initialization

Arrays can be initialized directly with values:

```js
let numbers = [3, 5, 7, 38, 0, -4, 3];
let names = ['John', 'Alice', 'Bob'];
```




### Using the `Array()` Constructor

Arrays can also be created using the `Array` constructor:

```js
let myArray = new Array();
myArray[0] = 36;
myArray[1] = 33;
myArray[2] = 23;

let myNames = new Array();
myNames[0] = 'John';
myNames[1] = 'Alice';
myNames[2] = 'Bob';
```



Alternatively, arrays can be initialized with values directly:

```js
let names = new Array('John', 'Alice', 'Bob');
let weights = new Array(34.5, 24.76, 45.6, 20.56, 45.4);
```



### Defining Arrays with a Specific Size

Arrays can be created with a specific size. If a single number is passed to the `Array` constructor, it creates an array of empty slots with that length:

```js
let numbers = Array(5); // numbers = [, , , , ]
```

To initialize an array with a specific size and fill it with a default value, use the `fill` method:

```js
let numbers = Array(5).fill(0); // numbers = [0, 0, 0, 0, 0]
```

### Mixed Data Types

While arrays can contain elements of different types, it is common practice to use arrays with elements of the same type.

****

# Conditional Statements

## `if` Statements

The condition in parentheses and the block in curly braces.  

If there is only one statement, they can be omitted.

```js
// If
if (a > b) {
    a = 0;
}
```

## `if-else` Statements

With the `else` clause, you can define an alternative block of code that runs when the `if` condition is not met.

```js
// If - Else
if (a == b) {
    a = 1;

} else {
    a = 34;
}
```

## `if-else-if` Statements

JavaScript does not have a specific `elseif` , `elsif` or `elif` keyword.   

Instead, you must nest `if-else` statements. Using curly braces `{}` is recommended to avoid confusion.

```js
// If - Else - If
if (a == b) {
    a = 1;

} else if (a < b) {
    a = -1;

} else {
    a = b;

}
```

## `switch-case` Statements

The `switch-case` structure is useful for handling multiple conditions based on the value  of a variable or expression.   

```js
// Switch - Case 1
switch (a) {
    case 4 : a=0;
        break;
    case 3 : a=1;
        break;
    case 0 : a=b;
        break;
    default: a=-1;
        break;
}

```

Unlike in C, JavaScript allows `switch-case` to work with more than just numeric types.

```js
// Switch - Case 2
switch (name) {

    case "gandalf":
         age = 1230;
         break;

     case "aragorn":
         age = 532;
         break;

     case "frodo":
     case "sam":
         age = 34;
         break;

     default:
         age = -1;
         break;
}
```

## Ternary (Elvis) Operator

The ternary operator allows for concise conditional assignments in a single line.   

For example, if `a` is greater than `b`, `c` is assigned the value of `a`; otherwise, it is assigned the value of `b`.

```js
// Ternary(elvis)
let c = (a > b) ? a : b;
```

This is equivalent to:

```js
if (a > b) {
 c = a;
} else {
 c = b;
}
```

While the ternary operator can condense logic into a single line, some developers find it less readable, especially when overused.

****

# Iterations (Loops)

JavaScript supports classic loop structures similar to those found in C-style languages.

## `while` Loop

The `while` loop repeats a block of code as long as the specified condition is true.

```js
// While
while (a < 100) {
    a++;
}
```

## `do-while` Loop

The `do-while` loop ensures that the block of code is executed at least once, and then repeats as long as the condition is true.

```js
// Do - While
do {
    b++;
} while (b < 100);
```

## `for` Loop

The `for` loop is commonly used for iterating over arrays or executing a block of
 code a specific number of times.   

It typically includes an initialization, a condition, and an increment/decrement.



```js
// For 
for (a = 0; a < 10; a++) {

    // Do something

}

let names = ['Bob', 'Alice', 'Peter'];

for (i = 0; i < names.length; i++) {
    
    console.log(names[i]);

}
```

Modern JavaScript offers many variations of the `for` loop, and arrays can be handled in multiple ways, as will be shown later.

## `break` and `continue`

These statements alter the flow of loops:

- **`break`**: Terminates the loop immediately.

- **`continue`**: Skips the current iteration and proceeds to the next one.

```js
// Break - Continue
while (a < 100) {
    a++;
     if (a == b) {
         b = 0;
         break;
        /*
        With 'break' we run out the loop
        If typed 'continue', instead of 'break', we
        would jump to the loop init.
        */
     }
     b--;
}
```

****

# Functions

In JavaScript, code can be grouped into functions.   

Unlike some other languages, JavaScript does not distinguish between procedures and functions—everything is a function.  

 Functions do not necessarily have to return a value and can accept parameters without specifying their types.

## Basic Function

Here’s a simple example of a function:

```js
// Basic function
function sayHello() {
    console.log('Hello world');
}
```

## Functions with Parameters

Functions can accept parameters to perform operations:

```js
// Function with params.
function withParams(param1, param2) {
    
    let local = 0;
    local = param1 + param2;
    
    console.log("Result is: " + local);

}
```

## Functions with Return Values

Functions can also return values using the `return` statement:

```js
function mul(x, y, z) {

    let local = 0;
    local = x * y * z;
    
    return local;
}
```

## Calling Functions

To call a function, simply use its name followed by parentheses, passing any required arguments:  

```js
// Calling Functions
function calculate() {

    let a = 4;
    let b = 45;
    let c = 2;
    let total = 0;
 
    total = mul(a, b, c); // Call the `mul` function
}
```



## Modern JavaScript Functions

New features and capabilities for functions have been introduced in recent updates, which will be explored in more detail later.

****

# Objects

In JavaScript (prior to ES6), **there are no classes, but objects** exist as structures defined within curly braces `{}`.

## Basic Object

```js
// Basic object
let emptyObject = {};

// Single object
let oneUser = {
    login: 'falken',
    password: 'josua'
};

typeof oneUser; // "object"

// Copying an object (references the same object)
let otherUser = oneUser;
otherUser.login = 'root';

// Accessing properties using bracket notation
oneUser['password'] = '1234';

// Both objects reference the same data


console.log('One:');
console.log(oneUser); // { login: 'root', password: '1234' }
console.log('Other:');
console.log(otherUser); // { login: 'root', password: '1234' }
```

### Checking for Properties

To check if an object has a specific property, use `Object.hasOwn`:

```js
Object.hasOwn(oneUser, "password"); // true
```



### JSON and Objects

JSON (JavaScript Object Notation) is essentially JavaScript objects.   

Objects in JavaScript are similar to hashtables or associative arrays, storing key-value pairs.

---

## Keys and Quotes

Quotes around keys can be omitted unless the key contains non-ASCII characters, special characters, or spaces:

```js
// JSON, arrays, brackets and quotations

let oneCustomer = {
    name: 'John Doe',
    'Customer address': 'c/ unknown',
    '-+-+-+': 'wtf',
    payment: {
        ptype: 'Visa',
        card: '33442324234',
        'expiry date': 'never'
    }
};

// Accessing and modifying properties
// Syntax:    var['key'] = 'value'
oneCustomer['name'] = '';
oneCustomer['-+-+-+'] = 'Something';
oneCustomer.payment['ptype'] = 'Account';
oneCustomer['payment'].card = '666';
oneCustomer['payment']['expiry date'] = 0;
```



### Nested Objects and Mixed Types

Objects can contain values of different types, including numbers, strings, booleans, arrays, other objects, and even functions.

---

## Methods as Properties

Functions can be added to objects as methods:

```js
let student = {
    id: 2,
    name: 'John Doe',
    sayHello: function () { // New anon function as a value (property)
        return 'Hello';
    }
};

console.log(student);
console.log(student.sayHello()); // "Hello"
```



### Adding Methods Dynamically

JavaScript allows adding properties and methods to objects dynamically:

```js
// Adding new properties and methods:
student.age = 28;
student.sayGoodbye = function () { return 'bye';};

console.log(student.sayGoodbye())

```

---

## The `this` Keyword

The `this` keyword refers to the current object and is useful for accessing properties within methods:

```js
// 'this' keyword

let invoice = {
    description : 'Sample invoice',
    price:100.0,
    vat: 5.0,
    subtotal : function () {
        return this.price;
    },
    total : function () {
        return this.price + ((this.price * this.vat)/100);
    }
}

console.log(invoice);
console.log(invoice.total());
```

****

## Constructors

Before ES6, JavaScript used constructor functions to create multiple instances of objects. By convention, constructor names start with a capital letter.

### Basic Constructor

```js
// Basic constructor

function Web () {
    this.url = 'http://localhost';
    this.name = 'Localhost';
    this.showInfo = function () {
        return this.url + ': ' + this.name;
    }
}

let oneWeb = new Web();
oneWeb.url = 'http://www.pello.info';
oneWeb.name = 'Home sweet home';

console.log(oneWeb);
console.log(oneWeb.showInfo());

let otherWeb = new Web();
otherWeb.url = 'https://docs.python.org/3/';
otherWeb.name = 'Python 3 man docs';

console.log(otherWeb);
console.log(otherWeb.showInfo())
```

### Constructor with Parameters

Constructors can accept parameters to initialize object properties:

```js
// Constructor with params

function Web (url, name) {
    this.url = url;
    this.name = name;
    this.showInfo = function () {
        return this.url + ': ' + this.name;
    }
}

let oneWeb = new Web('http://www.pello.info','Home sweet home');

console.log(oneWeb);
console.log(oneWeb.showInfo());

let otherWeb = new Web('https://docs.python.org/3/','Python 3 man docs');

console.log(otherWeb);
console.log(otherWeb.showInfo());
```



****

# ES6 and Beyond

## Variable Declarations

ES6 introduces `const` and `let` for block-scoped variables, replacing the problematic `var`.

```js
// ES6 Variable Declarations

someVar = 6;       // global

var otherVar = 42;

const pi = 3.1415;
// pi = 666  This would cause errors

const names = [];
names.push("Sam");  // This is ok
names.pop();

```

### `const`

Used for constants that cannot be reassigned:

### `let`

Used for variables that can be reassigned:

```js
let number = 0
number = number + 1;

number = 666;

let thereBeRock = "ACDC";

```

## Why Avoid `var`?

The `var` keyword has issues with **hoisting**, where variables declared inside blocks can be moved to the top of the function, causing unexpected behavior.  

Block-scoped variables (`const` and `let`) prevent this issue.

### Example of `var` Hoisting:

```js
if (true) {
    var x = 10;
}

console.log(x); // 10 (x is accessible outside the block)
```

### Example of `let` Block Scope:

```js
if (true) {
    let y = 10;
}

console.log(y); // Error: y is not defined
```



## Best Practices

- Use `const` by default for variables that won’t be reassigned.

- Use `let` only when reassignment is necessary.

- Avoid `var` and global declarations to prevent scope-related bugs.

****

# Destructuring: Extracting Values

ES6 introduces a powerful feature called **destructuring**, which allows you to extractv alues from arrays or objects into distinct variables.   

This feature is inspired by languages like Perl and Python and is incredibly useful for simplifying code.

## Array Destructuring

You can extract values from an array into individual variables:

```js
const names = ['Sam', 'Gimli', 'Frodo', 'Legolas', 'Pippin'];
const [loyal, dwarf, hero, elf, naughty] = names;

console.log(loyal); // 'Sam'
console.log(dwarf); // 'Gimli'
console.log(hero); // 'Frodo'
console.log(elf); // 'Legolas'
console.log(naughty); // 'Pippin'
```

### Skipping Values

You can skip values by leaving empty spaces between commas:

```js
const names = ['Sam', 'Gimli', 'Frodo', 'Legolas', 'Pippin'];
const [loyal, , hero, , naughty] = names;

console.log(loyal); // 'Sam'
console.log(hero); // 'Frodo'
console.log(naughty); // 'Pippin'
```



## Object Destructuring

You can also extract values from objects into variables with matching property names:

```js
const character = {
    name: 'Gandalf',
    nickname: 'The Grey',
    age: 1024,
    weapons: ['Foe Hammer', 'Staff']
};

const { name, weapons } = character;

console.log(name); // 'Gandalf'
console.log(weapons); // ['Foe Hammer', 'Staff']
```

### Renaming Variables

You can rename the extracted variables:

```js
const { name: wizardName, weapons: wizardWeapons } = character;

console.log(wizardName); // 'Gandalf'
console.log(wizardWeapons); // ['Foe Hammer', 'Staff']
```

## Why Use Destructuring?

- **Simplifies Code**: Reduces the need for repetitive dot notation or bracket notation.

- **Improves Readability**: Makes it clear which values are being extracted.

- **Flexible**: Allows skipping values, renaming variables, and more.





****

# Property Shorthand in Objects

ES6 introduces a convenient shorthand for assigning properties to objects when the variable names match the property names.   

This feature simplifies object creation and makes the code cleaner and more concise.

## Traditional Object Assignment

When creating an object, you typically assign values to properties like this:

```js
const name = 'Legolas';

const race = 'Elf';

const weapons = [{ type: 'bow', qty: 1 }, { type: 'arrows', qty: 10 }];

const character = {
    name: name,
    race: race,
    weapons: weapons,
    age: 666
};
```

## ES6 Property Shorthand

If the variable names match the property names, you can use the shorthand syntax:

```js
const character = {
    name,
    race,
    weapons,
    age: 666
};
```



### Explanation:

- **`name`**: Instead of writing `name: name`, you can simply write `name`.

- **`race`**: Similarly, `race: race` becomes `race`.

- **`weapons`**: `weapons: weapons` becomes `weapons`.

- **`age`**: Since `age` is not a variable, it is assigned directly.

## Why Use Property Shorthand?

- **Less Repetition**: Reduces redundancy when variable names match property names.

- **Cleaner Code**: Makes object creation more concise and readable.

- **Common in ES6**: This pattern is widely used in modern JavaScript.

### Example in Practice:

```js
const firstName = 'Aragorn';
const lastName = 'Son of Arathorn';
const title = 'King of Gondor';

const king = {
    firstName,
    lastName,
    title,
    age: 210
};

console.log(king);
// Output: { firstName: 'Aragorn', lastName: 'Son of Arathorn', title: 'King of Gondor', age: 210 }
```

****

# String Interpolation (Template literals)

ES6 introduces **template literals**, a powerful feature for creating strings that include variables or expressions. This is also known as **string interpolation**. Template literals use backticks (`` ` ``) instead of single or double quotes and allow you to embed variables or expressions directly into the string using `${}`.

## Traditional String Concatenation

Before ES6, you had to concatenate strings and variables using the `+` operator or the `concat` method:

```js
let result = 'OK';
let prices = [666, 15, 42, 0, 35];
let customer = { name: 'Juan', country: 'ES' };
let message = 'The result for ' + customer.name + ' is ' + result + ' value is ' + prices[2];
```

This approach is error-prone and can become messy with longer strings.

## Template Literals

With template literals, you can embed variables and expressions directly into the string:

```js
let message = `The result for ${customer.name} is ${result} value is ${prices[2]}`;
```



### Key Features:

1. **Embed Variables**: Use `${variable}` to insert variables directly into the string.

2. **Embed Expressions**: You can also include expressions inside `${}`:
   
   ```js
   let total = `Total: ${prices[0] + prices[1]}`; // Total: 681
   ```

3. **Multi-line Strings**: Template literals preserve line breaks, so you can create multi-line strings without using `\n`:
   
   ```js
   let longMessage = `The result
   for ${customer.name}
   is ${result}
   value is ${prices[2]}`;
   ```

### Example:

```js
let result = 'OK';
let prices = [666, 15, 42, 0, 35];
let customer = { name: 'Juan', country: 'ES' };

let message = `The result for ${customer.name} is ${result}. The value is ${prices[2]}.`;

console.log(message);
// Output: The result for Juan is OK. The value is 42.
```

### Multi-line Example:

```js
let longMessage = `The result
for ${customer.name}
is ${result}.
The value is ${prices[2]}.`;

console.log(longMessage);
// Output:
// The result
// for Juan
// is OK.
// The value is 42.
```

## Why Use String Interpolation?

- **Cleaner Code**: Eliminates the need for repetitive concatenation.

- **Improved Readability**: Makes it easier to see where variables are inserted.

- **Multi-line Support**: Simplifies the creation of multi-line strings.

- **Expression Support**: Allows embedding complex expressions directly into strings.

****

# Loops in ES6

ES6 introduces three types of `for` loops, each with its own use case. These include the classic `for` loop, `for..in`, and `for..of`. Let's explore each one.

---

## 1. Classic `for` Loop

The classic `for` loop is used when you need to iterate over an array or perform a task a specific number of times. It requires an index variable, typically declared with `let`.

```js
let names = ['John', 'Alice', 'Bob', 'Jane'];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// Output:
// John
// Alice
// Bob
// Jane
```

---

## 2. `for..in` Loop

The `for..in` loop is used to iterate over the **keys** of an object or the **indices** of an array. It automatically updates the index/key for each iteration.

### Iterating Over Arrays

```js
for (let i in names) {
    console.log(i, names[i]);
}

// Output:
// 0 John
// 1 Alice
// 2 Bob
// 3 Jane
```



### Iterating Over Objects

```js
let book = {
    title: 'Atomic book of React',
    author: 'Pello Altadill',
    ISBN: 'none',
    isGood: true,
    score: 9,
    topics: ['React.js', 'Redux', 'React Native', 'ES6']
};

for (let b in book) {
    console.log(`${b}: ${book[b]}`);
}


// Output:
// title: Atomic book of React
// author: Pello Altadill
// ISBN: none
// isGood: true
// score: 9
// topics: React.js,Redux,React Native,ES6
```

---

## 3. `for..of` Loop

The `for..of` loop is used to iterate over **iterable objects** (like arrays, strings, maps, sets, etc.). It directly accesses the **values** of the iterable, eliminating the need for an index.

### Iterating Over Arrays

```js
for (let name of names) {
    console.log(name);
}

// Output:
// John
// Alice
// Bob
// Jane
```

### Iterating Over Arrays of Objects

```js
let people = [
    { name: 'John', age: 44 },
    { name: 'Alice', age: 43 },
    { name: 'Bob', age: 20 },
    { name: 'Jane', age: 21 }
];

for (let person of people) {
    console.log(person);
}


// Output:
// { name: 'John', age: 44 }
// { name: 'Alice', age: 43 }
// { name: 'Bob', age: 20 }
// { name: 'Jane', age: 21 }
```



---

## Key Differences

| Loop Type | Use Case                         | Accesses      | Works With                  |
| --------- | -------------------------------- | ------------- | --------------------------- |
| `for`     | Classic iteration with an index  | Index + Value | Arrays, custom logic        |
| `for..in` | Iterate over keys/indices        | Keys/Indices  | Objects, Arrays             |
| `for..of` | Iterate over values of iterables | Values        | Arrays, Strings, Maps, Sets |

---

## When to Use Which?

- **`for`**: When you need precise control over the iteration (e.g., custom step sizes or conditions).

- **`for..in`**: When you need to iterate over object properties or array indices.

- **`for..of`**: When you need to iterate over the values of an iterable (e.g., arrays, strings).

****

# Spread Operator

The **spread operator** (`...`) is a powerful feature introduced in ES6 that allows you to "spread" the elements of an array or object into another array, object, or function call. It is particularly useful for tasks like combining arrays, copying arrays, or passing multiple arguments to functions.

---

## Using the Spread Operator with Arrays

### Combining Arrays

You can use the spread operator to concatenate arrays easily:

```js
const heroes = ['Frodo', 'Sam'];
const kids = ['Merrin', 'Pippin'];
const hobbits = [...heroes, ...kids];

console.log(hobbits);
// Output: ['Frodo', 'Sam', 'Merrin', 'Pippin']
```

### 

### Copying Arrays

The spread operator can also be used to create a shallow copy of an array:

```js
const original = [1, 2, 3];
const copy = [...original];

console.log(copy); // [1, 2, 3]
```



### Adding Elements

You can add new elements while spreading an array:

```js
const numbers = [1, 2, 3];
const newNumbers = [0, ...numbers, 4];

console.log(newNumbers); // [0, 1, 2, 3, 4]
```



---

## Using the Spread Operator with Objects

### Combining Objects

You can merge properties from multiple objects into a new object:

```js
const person = { name: 'John', age: 30 };
const job = { role: 'Developer', company: 'Tech Corp' };

const employee = { ...person, ...job };

console.log(employee);
// Output: { name: 'John', age: 30, role: 'Developer', company: 'Tech Corp' }
```



### Copying Objects

The spread operator can also create a shallow copy of an object:

```js
const original = { a: 1, b: 2 };
const copy = { ...original };

console.log(copy); // { a: 1, b: 2 }
```



### Overwriting Properties

If there are duplicate properties, the last one wins:

```js
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const merged = { ...obj1, ...obj2 };

console.log(merged); // { a: 1, b: 3, c: 4 }
```



---

## Using the Spread Operator in Function Calls

You can use the spread operator to pass elements of an array as individual arguments to a function:

```js
function add(a, b, c) {
 return a + b + c;
}

const numbers = [1, 2, 3];
const result = add(...numbers);

console.log(result); // 6
```

---

## Key Properties of the Spread Operator

1. **Concise Syntax**: Simplifies combining or copying arrays and objects.

2. **Immutability**: Helps create new arrays or objects without modifying the originals.

3. **Flexibility**: Works with arrays, objects, and function arguments.

****

Pendiente dede 01 JS - ES6 - Default params.
