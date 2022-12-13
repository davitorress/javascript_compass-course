const numbers = [1, 2, 3, 4, 1];

const count = countOccurrences(numbers, 1);
console.log(count);

function countOccurrences(array, searchElement) {
	return array.reduce((count, element) => {
		return count + (element === searchElement ? 1 : 0);
	}, 0);
}
