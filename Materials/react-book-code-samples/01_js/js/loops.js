// For
for (a = 0; a < 10; a++) {
    // do stuff
}

var names = ['Bob', 'Alice', 'Peter'];

for (i = 0; i < names.length; i++) {
    console.log(names[i]);
}




// While
a = 0;

while (a<100) {
    a++;
}




// Do - While
var b = 0;

do {
    b++;
} while (b < 100);




// Break and Continue
while (a<100) {
    a++;
    if (a == b) {
        b = 0;
        break;
// con break salimos del bucle
// si pusieramos continue saltariamos
// al principio del bucle.
    }
    b--;
}