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
