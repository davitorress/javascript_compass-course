// Variables

// Rules
// Cannot be a reserved keyword
// Should be meaningful
// Cannot start with a number
// Cannot contain a space or hyphen
// Are case-sensitive

let firstName = "Davi";
console.log(firstName);

const interestRate = 0.3;
// Cannot change the value of a constant
// interestRate = 1;
console.log(interestRate);

// Primitive Types
let fullName = "Davi Torres"; // String
let age = 18; // Number literal
let isApproved = true; // Boolean literal
let test; // Undefined
let selectedColors = null; // Null

// Reference Types
let person = {
	name: "Davi",
	age: 18,
}; // Object literal
person.name = "Gabriel"; // Dot Notation
person["name"] = "Vitoria"; // Bracket Notation
console.log(person.name);

selectedColors = ["green", "purple"]; // Array literal
selectedColors[2] = 1;
console.log(selectedColors);

// Performing a task
function greet(firstName, lastName) {
	console.log("Hello " + firstName + " " + lastName);
} // Function declaration

// Returning a value
function square(number) {
	return number * number;
}

greet("Davi", "Torres");
console.log(square(2));
