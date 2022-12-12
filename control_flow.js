// If...else
let hour = 13;

if (hour >= 6 && hour < 12) console.log("Good morning!");
else if (hour >= 12 && hour < 18) console.log("Good afternoon!");
else console.log("Good evening!");

// Switch...case
let role;

switch (role) {
	case "guest":
		console.log("Guest User");
		break;

	case "moderator":
		console.log("Moderator User");
		break;

	default:
		console.log("Unknown User");
}

// Loops

// For
for (let i = 0; i < 4; i++) {
	if (i % 2 !== 0) console.log("For loop", i);
}

// While
let i = 0;
while (i < 4) {
	if (i % 2 === 0) console.log("While loop", i);
	i++;
}

// Do-while
let j = 5;
do {
	console.log("Do-while loop", j);
	j++;
} while (j < 4);
