
function log (msg, prefix = "JsLogger") {
    console.log(`${prefix}> ${msg}`)
}

log("Hello");                       //JsLogger> Hello
log("Hello to you", "MyPrefix");    // MyPrefix> Hello to you


function sample (name="Candyman", repeat = 3) {
    let result = "";

    for (let i = 0;i < repeat; i++) {
        result += name;
    }

    return result;
}

console.log(sample("John",5));    // JohnJohnJohnJohnJohn
console.log(sample(undefined, 3));


function paint ([r="ff", g="ff", b="ff"]=[]) {
    return `color: #${r}${g}${b}`;
}

console.log(paint(["03","FF","CC"]));      // color: #03FFCC
console.log(paint(["CC",undefined,"CC"])); // color: #CCffCC
console.log(paint([]));                    // color: #ffffff
console.log(paint(["DE","AD"]));           // color: #DEADff


console.log(paint()); // error unless =[] is defined in function params

function render ({ tag= "div", cssClass="title", text="ok"}) {
    return `<${tag} class="${cssClass}">
                ${text}</${tag}>`;
}


console.log(render({}));
// <div class="title">
//    ok</div>

console.log(render({tag: "h1", cssClass: "big", text: "ES6 rlz"}));
// <h1 class="big">
//    ES6 rlz</h1>


function validate ({ fields = [...{fields}], regex = [...regexp] }) {
    for (f of fields) {
        console.log(f.name);
    }

    for (r of regex)  {
        console.log(r);
    }
}

validate({fields: [{name:"login", value: "falken"},
                    {name: "password", value: "josua"}
                  ],
          regex : ["\\w{8,50}", "\\w\\W{8,15}"]}
          );

// login
// password
// \w{8,50}
// \w\W{8,15}
