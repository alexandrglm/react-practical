class Customer {
    constructor (name, age) {
        this._name = name;
        this._age = age;
    }

   get name () {
   	return this._name;
   }

   set name (name) {
   	this._name= name;
   }

   get age () {
   	return this._age;
   }

   set age (age) {
   	this._age = age;
   }
}

customer = new Customer();

customer.age = 66;
customer.name = "John Doe";

console.log(customer);
console.log(customer.name, customer.age);
