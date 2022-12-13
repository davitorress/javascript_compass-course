let addressFactory = createAddress("a", "b", "c");
let addressConstructor = new Address("a", "b", "c");

console.log(addressFactory);
console.log(addressConstructor);

// Factory function
function createAddress(street, city, zipCode) {
	return {
		street,
		city,
		zipCode,
	};
}

// Constructor function
function Address(street, city, zipCode) {
	this.street = street;
	this.city = city;
	this.zipCode = zipCode;
}
