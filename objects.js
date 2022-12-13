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
