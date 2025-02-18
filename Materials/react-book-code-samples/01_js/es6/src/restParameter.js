function average () {
    if (arguments.length === 0) return 0;
    let avg = 0;
    let i = 0;
    for (i=0;i<arguments.length;i++)
        avg += arguments[i];

    return avg/(i-1);
}

console.log(average());        // 0
console.log(average(5,10,15)); // 15

function add (...numbers) {
    let result = 0;

    for (n of numbers)
        result += n;

    return result;
}

console.log(add(3,5,8,5));     // 21

function mul (a, b, ...others) {
    let result = a * b;

    for (o of others)
        result *= o;

    return result;
}

console.log(mul(3,2,7,1)); // 42