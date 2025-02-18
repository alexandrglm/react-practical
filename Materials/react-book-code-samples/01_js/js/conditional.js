var a = 5;
var b = 4;

if (a > b) {
    a = 0;
}

if (a == b) {
    a = 1;
} else {
    a = 34;
}

if (a == b) {
    a = 1;
} else if (a < b){
    a = -1;
} else {
    a = b;
}

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

var c = (a > b) ? a : b;