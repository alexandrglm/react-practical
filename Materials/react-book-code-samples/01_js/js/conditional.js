var a = 5;
var b = 4;

// If
if (a > b) {
    a = 0;
}

// If - Else
if (a == b) {
    a = 1;
} else {
    a = 34;
}


// If - Else If - Else
if (a == b) {
    a = 1;
} else if (a < b){
    a = -1;
} else {
    a = b;
}


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
        age -1;
        break;
}


// Ternary Operator (Elvis)
var c = (a > b) ? a : b;
/*
This is equivalent to:

```js
if (a > b) {
 c = a;
} else {
 c = b;
}
*/