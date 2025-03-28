// Basic Object
let emptyObject = {};

// One single object
let oneUser = {
    login : 'falken',
    password : 'josua'
};

typeof oneUser; // Object

otherUser = oneUser;

otherUser.login = 'root';
// Other way to access property
oneUser['password'] = '1234';

// The reference to the same!
console.log('One: ')
console.log(oneUser); // Object { login="root",  password="1234"}
console.log('Other: ');
console.log(otherUser); // Object { login="root",  password="1234"}



// JSON, arrays, brackets and quotations
let oneCustomer = {
    name : 'John Doe',
    'Customer address' : 'c/ unknown',
    '-+-+-+' : 'wtf',
    payment : { ptype : 'Visa',
        card  : '33442324234',
        'expiry date' : 'never'
    }
};

console.log(oneCustomer);
// Accessing and modifying properties
// Syntax:    var['key'] = 'value'
oneCustomer['name'] = '';
oneCustomer['-+-+-+'] = 'Something';
oneCustomer.payment['ptype'] = 'Account';
oneCustomer['payment'].card = '666';
oneCustomer['payment']['expiry date'] = 0;

console.log(oneCustomer);



// Methods as Properties

let student = {
    id : 2,
    name : 'John Doe',
    sayHello : function () { // New anon function as a value (property)
        return 'Hello';
    }
}
console.log(student);
console.log(student.sayHello()); // Hello


// Adding new properties and methods:
student.age = 28;
student.sayGoodbye = function () { return 'bye';};

console.log(student.sayGoodbye())

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



// Basic constructor
function Web () {
    this.url = 'http://localhost';
    this.name = 'Localhost';
    this.showInfo = function () {
        return this.url + ': ' + this.name;
    }
}

let oneWeb = new Web();
oneWeb.url = 'http://www.pello.info';
oneWeb.name = 'Home sweet home';

console.log(oneWeb);
console.log(oneWeb.showInfo());

let otherWeb = new Web();
otherWeb.url = 'http://www.elmundo.es';
otherWeb.name = 'El Mundo';

console.log(otherWeb);
console.log(otherWeb.showInfo())




// Constructor with params
function Web (url, name) {
    this.url = url;
    this.name = name;
    this.showInfo = function () {
        return this.url + ': ' + this.name;
    }
}

var oneWeb = new Web('http://www.pello.info','Home sweet home');

console.log(oneWeb);
console.log(oneWeb.showInfo());

var otherWeb = new Web('http://www.elmundo.es','El Mundo');

console.log(otherWeb);
console.log(otherWeb.showInfo());
