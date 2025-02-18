function sayHello () {
    console.log('Hello world');
}

function withParams (param1, param2) {
    var local = 0;
    local = param1 + param2;
    console.log("Result is: " + local);
}

function mul (x,y,z) {
    var local = 0;
    local = x * y *z;
    return local;
}

function calculate () {
    var a = 4;
    var b = 45;
    var c = 2;
    var total = 0;
    total = multiplica(a, b, c);
}