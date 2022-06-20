/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
	const allBrackets = ['(', ')', '[', ']', '{', '}']//all opening brackets are even indexes while closing brackets are odd
	// const str = "(){}[]"
	let closeBracketIndexes = []
	// 2. Get the indexes of str in allBrackets
	for (const bracket of str) {
		// stat0ement
		let currentBracketIndex = allBrackets.indexOf(bracket);
		if (currentBracketIndex % 2 == 0) {
			closeBracketIndexes.push(currentBracketIndex + 1);
		} else {
			if (closeBracketIndexes.pop() !== currentBracketIndex) {
				return 'invalid';
			}
		}


	}

	return closeBracketIndexes.length == 0 ? 'valid' : 'invalid';

}

module.exports = isValid;

// console.log(isValid('()'))
