let result = "OK";
let prices = [666, 15, 42, 0, 35];
let customer = { name: "Juan", country: "ES" };

let message = "The result for " + customer.name + " is " + result + " value is " + prices[2];

// message = "The result for Juan is OK value is 42"

let message = `The result for ${customer.name} is ${result} value is ${prices[2]}`;

let longMessage = `The result 
                    for ${customer.name} 
                    is ${result} 
                    value is ${prices[2]}`;
