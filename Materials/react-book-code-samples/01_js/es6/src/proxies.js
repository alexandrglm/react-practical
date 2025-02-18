const account = { owner: "Harry P.", balance: 634225.34 };

const handler = {
    get(target, property) {
        console.log(`Proxy> called ${property}`);
        return target.owner;
    }
}
const proxy = new Proxy(account, handler);

let owner = proxy.owner;   // Proxy> called owner
// owner = "Harry P."

const secHandler = {
    get(target, property) {
        console.log(`Proxy> ${property} is confidential`);
        return null;
    }
}
const secProxy = new Proxy(account, secHandler);
secProxy.balance; // Proxy> balance is confidential

/*
    get (target, property) {
        return null;
    },
    set(target, property, value) {
        if (property === "balance")
            if (value <= 0) {
                console.log(`Proxy> tried to set ${value}`);
            } else {
                target["balance"] += value;
            }
        }
    }

 */

const balanceHandler = {
    get (target, property) {
        return null;
    },
    set(target, property, value) {
        if (property === "balance") {
            if (value <= 0) {
                console.log(`Proxy> tried to set ${value}`);
            } else {
                target["balance"] += value;
            }
        }
    }
};

const protectProxy = new Proxy(account, balanceHandler);

protectProxy.balance = -6;
// Proxy> tried to set -6