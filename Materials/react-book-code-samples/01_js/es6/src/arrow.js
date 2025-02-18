function add (a,b) {
    return a + b;
}
const add = (a, b) =>  { return a + b; }
const del = (a, b) => a - b;

add(5, 6);  // 11
del(50, 8); // 42

const inc = (a) => ++a;
const dec = a => --a;

inc(41);    // 42
dec(43);    // 42


const imcDiagnose = (weight, height) => {
    let imc = (weight / (height*height) ) * 10000;

    if (imc < 18) {
        return `${imc} Go and eat something.`;
    } else if (imc >= 18 && imc < 24) {
        return `${imc} meh, not bad.`
    } else {
        return `${imc} run away or just run.`;
    }
};

console.log(imcDiagnose(80, 175));