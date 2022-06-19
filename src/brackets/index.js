/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
  // declaring the symbols in Key value pairs ( opening and closing brackets)

  const hashMap = { "{": "}", "(": ")", "[": "]" };
// '(){}[]'
  // declaring an empty array to push characters into

  const brackets = [];

  // iterating through each character of "str" the input value

  for (let character of str) {
    // passing a conditional statment, if a character is included in the declared hashMap

    if (hashMap[character]) {
      // It should be pushed into the newly created array "Brackets"

      brackets.push(hashMap[character]);
    }

    // If the length of the new array is greater than 0 and the last element in the new array is equal to any character then remove such element "pop()"
    else if (
      (brackets.length > 0 && brackets[brackets.length - 1] === character)
    ) {
      brackets.pop();
    }
    // else it should return a false "Invalid"
    else {
      return `invalid`;
    }
  }
  // Coming outside the loop if it meets the first condition return a "valid"
  if (brackets.length === 0) {
    return `valid`
  } else {
    return `invalid`
  }
}

module.exports = isValid;
