async function add (a, b) {
	return a + b;
}

async function main () {
	console.log ("Result is: ");
	const c = await add (40, 2);
	console.log (c);
}

main ();

// Result is
// 42

async function getIpAddress() {
	const data = await fetch( "https://api.ipify.org?format=json" );
	return data;
}

async function main2 () {
	console.log("Ready?");
	const result = await getIpAddress();
	console.log("Finished: " + result);
}

main2();
