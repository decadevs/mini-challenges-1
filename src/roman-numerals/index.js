/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
	let values = {
		'I': 1,
		'V': 5,
		'X': 10,
		'L': 50,
		'C': 100,
		'D': 500,
		'M': 1000
	}

	let array = roman.split('');
	let count = 0;
	let current, currentValue, next, nextValue;

	for (var i = 0; i < array.length; i++) {
		current = array[i];
		currentValue = values[current];

		next = array[i+1];
		nextValue = values[next];

		if(currentValue >= nextValue) {
			count += currentValue;
		} else {
			count -= currentValue;
		}
	}

	return count;
}



module.exports = romanToDecimal;
