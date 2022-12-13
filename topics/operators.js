// Arithmetic Operators
let x = 10;
let y = 3;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);

// Increment
console.log(++x);
// Decrement
console.log(--x);

// Assignment Operators
x += 5;
y *= 2;

// Comparison Operators
x = 1;

// Relational
console.log(x > 0);
console.log(x >= 1);
console.log(x < 1);
console.log(x <= 1);

// Equality
// Strict equality (type + value)
console.log(x === "1");
console.log(x === 1);
console.log(x !== 1);
// Lose equality (value)
console.log(x == "1");
console.log(x == 1);
console.log(x != 1);

// Ternary Operators
let points = 110;
let type = points > 100 ? "gold" : "silver";
console.log(type);

// Logical Operators
// AND (&&)
console.log(false && true);
// OR (||)
console.log(false || true);
// NOT (!)
console.log(!true);

// Falsy (false) -> undefined, null, 0, false, "", NaN
// Anything that ins't Falsy -> Truthy (true)

// Short-circuiting
let userColor = "red";
let defaultColor = "blue";
let currentColor = userColor || defaultColor;
console.log(currentColor);
