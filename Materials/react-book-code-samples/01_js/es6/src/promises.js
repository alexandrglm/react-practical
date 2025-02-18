const hello = function (msg) {
    // Return a new promise.
    return new Promise(function(resolve, reject) {
        setTimeout(function () {
            if (msg.length > 0) {
                resolve(msg);
            } else {
                reject(Error("Msg not valid"));
            }
        }, 1000);
    });

}





hello("Epa").then(function (msg) {
    console.log("Ok, mesg is: " + msg);
}, function (error) {
    console.log(error);
});
// Ok, mesg is: Epa

/*
hello("").then(function (msg) {
    console.log("Ok, mesg is: " + msg);
}, function (error) {
    console.log(error);
});*/

// Error: Msg not valid
// + ... errors

hello("").then(function (msg) {
    console.log("Ok, mesg is: " + msg);
}).catch((err) => {
    console.log(`Errors under control. ${err}`)
});

// Errors under control. Error: Msg not valid
