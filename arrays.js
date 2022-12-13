const numbers = [3, 4];

// Adding Elements
// End
numbers.push(5, 6);
console.log(numbers);

// Beginning
numbers.unshift(1, 2);
console.log(numbers);

// Middle
numbers.splice(2, 0, "a", "b", "a");
console.log(numbers);

// Finding Elements (primitives)
console.log(numbers.indexOf("c"));
console.log(numbers.indexOf(3));
console.log(numbers.lastIndexOf("a"));
console.log(numbers.includes("c"));

// Finding Elements (reference types)
const courses = [
	{ id: 1, name: "a" },
	{ id: 2, name: "b" },
];

console.log(
	courses.find((course) => {
		return course.name === "a";
	})
);
console.log(courses.findIndex((course) => course.name === "x"));

// Removing Elements
const names = ["a", "b", "c", "d", "e", "f"];

// End
const last = names.pop();
console.log(last);
console.log(names);

// Beginning
const first = names.shift();
console.log(first);
console.log(names);

// Middle
names.splice(2, 2);
console.log(names);

// Emptying an Array
let array = [1, 2, 3];

// Solution 1
array = [];

// Solution 2
array.length = 0;

// Solution 3
array.splice(0, array.length);

// Solution 4
while (array.length > 0) array.pop();

// Combining and Slicing Arrays
const one = [1, 2, 3];
const two = [4, 5, 6];

const combined = one.concat(two);
console.log(combined);

const slice = combined.slice(2);
console.log(slice);

// Spread Operator
const spread = [...one, ...two];

// Iterating an Array
names.forEach((name, index) => console.log(index, name));

// Joining Arrays
console.log(names.join(";"));

// Sorting Arrays
const notSorted = [3, -5, 123, 12, -1, 23];
const sorted = notSorted.sort((a, b) => {
	if (a < b) return -1;
});
console.log(sorted);

// Filtering an Array
const filtered = sorted.filter((value) => value >= 0);
console.log(filtered);

// Mapping an Array
const items = filtered.map((value) => ({ value }));
console.log(items);

// Chaining an Array
const chain = notSorted
	.sort((a, b) => {
		if (a < b) return -1;
	})
	.filter((value) => value >= 0)
	.map((value) => ({ value }));
console.log(chain);

// Reducing an Array
const prices = [53.2, 12.3, 10, 5];
const sum = prices.reduce((sum, price) => sum + price);
console.log(sum);
