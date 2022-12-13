// Hoisting
walk(); // Only with functions declarations

// Function Declaration
function walk() {
	console.log("walk");
}

// Named Function Expression
let run = function running() {
	console.log("run");
};

// Anonymous Function Expression
run = function () {
	console.log("run");
};
run();
let move = run;
move();

// Arguments
function sumArgs() {
	let total = 0;
	for (let value of arguments) total += value;

	return total;
}
console.log(sumArgs(1, 2, 3, 4, 5, 10));

// Rest Operator
function sum(discount, ...prices) {
	const total = prices.reduce((a, b) => a + b);
	return total * (1 - discount);
}
console.log(sum(0.1, 20, 30));

// Default Parameters
function interest(principal, rate = 3.5, years = 5) {
	return ((principal * rate) / 100) * years;
}
console.log(interest(10000));

// Getters and Setters
const person = {
	firstName: "Davi",
	lastName: "Torres",

	get fullName() {
		return `${this.firstName} ${this.lastName}`;
	},
	// Try and Catch
	set fullName(value) {
		if (typeof value !== "string") throw new Error("Value isn't a string.");

		const parts = value.split(" ");
		if (parts.length !== 2) throw new Error("Enter a first and last name.");

		this.firstName = parts[0];
		this.lastName = parts[1];
	},
};

try {
	person.fullName = "";
} catch (e) {
	console.log(e);
}
console.log(person.fullName);
