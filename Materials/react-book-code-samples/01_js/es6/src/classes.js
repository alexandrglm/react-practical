class Device {
    constructor (name, price = 66.6) {
        this.name = name;
        this.price = price;
    }

    start () {
        console.log("Starting...")
    }

    doStuff () {
        console.log(`${this.name} doing stuff`)
    }
}

const myPhone = new Device("iSimov", 42.0);
myPhone.doStuff();

class Tablet extends Device {
    constructor(name, price, battery=0) {
        super(name, price);
        this.battery = battery;
    }

    use () {
        super.doStuff();
        this.battery--;
    }

    getStatus() {
        console.log(`${this.name} batt: ${this.battery}%`)
    }
}

const myTablet = new Tablet("qb", 1042.0, 100);
myTablet.use();         // qb doing stuff
myTablet.getStatus();   // qb batt: 99

class Car {
    constructor (model, fuel, plate) {
        this.model = model;
        this.fuel = fuel;
        this.plate = plate;
    }

    run () {
        if (fuel > 0)
            this.fuel--;
    }

    load (fuel) {
        this.fuel = fuel;
    }

    identify () {
        return `${this.model} plate: ${this.plate}`;
    }
}


//doThis = () => (console.log("I do some"))
//doOtherStuff = (a) => console.log("Just showin it: ", a);

//doMoreStuff = (a,b) => a+b

/*doMultipleStuff = (a, b = 0) => {
    console.log("Passed values: ", a, b)
    a + b
}*/

class SomeClass {
	hello () {
		console.log ("Hey, it works");
	}
}

export default SomeClass;