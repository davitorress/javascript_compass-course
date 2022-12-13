// Basics
// Object-oriented Programming (OOP)

const circle = {
	radius: 1,
	location: {
		x: 1,
		y: 1,
	},
	isVisible: true,

	draw() {
		console.log("draw");
	},
};

circle.draw(); // Method

// Factory Function
function createCircle(radius) {
	return {
		radius, // radius: radius
		draw() {
			console.log("draw");
		},
	};
}

const circle1 = createCircle(1);
const circle2 = createCircle(2);
console.log(circle1);
console.log(circle2);

// Constructor Function
function Circle(radius) {
	this.radius = radius;
	this.draw = () => {
		console.log("draw");
	};
}

const circle3 = new Circle(3);

// Date object
const now = new Date();
const date1 = new Date("May 11 2018 09:00");
const date2 = new Date(2018, 4, 11, 9);

date2.setFullYear(2019);
