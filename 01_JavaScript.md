# Chapter 01:    JavaScript



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

| **OPERATORS** | **SYMBOL** | **DESCRIPTION**                                          | **EXAMPLE**                   |
| ------------- | ---------- | -------------------------------------------------------- | ----------------------------- |
| **AND**       | `&&`       | Returns `true` only if both operands are `true`.         | `true && true` =  `true`      |
|               |            |                                                          | `true && false` =  `false`    |
|               |            |                                                          | `false && true` =  `false`    |
|               |            |                                                          | `false && false` =  `false`   |
| **OR**        | `\||`      | Returns `true` when any operators are true.              | `true` \|| `true` = `true`    |
|               |            |                                                          | `true` \|| `false` = `true`   |
|               |            |                                                          | `false` \|| `true` = `true`   |
|               |            |                                                          | `false` \|| `false` = `false` |
| **NOT**       | `!`        | Unary operator that returns the opposite of the operand. | `!true` = `false`             |
|               |            |                                                          | `!false` = `true`             |

⚠️ `&&` and `||` operators perform a logical shortcut to avoid evaulate the entire expression:

* `&& shortcut`:    If the first operand is FALSE, next won't be evaluated. 

* `|| shortcut:`   If the first operand is TRUE, next won't be evaluated (as we, logically, understand that the second is also TRUE).

⚠️ Syntax for evaulate BOTH operands:  

```js
operand1 & operand2

operand1 | operand2
```



****

Pending from "Booleans initialisations".




