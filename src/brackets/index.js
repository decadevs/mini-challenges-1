/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
  let stackArray = []; // holds opening brackets in str in order of appearance
  let openingBracketsArray = ["(", "{", "["];
  let closingBracketsArray = [")", "}", "]"];
  let bracketPairs = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (i = 0; i < str.length; i++) {
    if (openingBracketsArray.includes(str[i])) {
      // if the char in str is in the openingBracketsArray, add it to stackArray
      stackArray.push(str[i]);
    } else if (closingBracketsArray.includes(str[i])) {
      /*
       *  if char in str is in closingBrackets Array, compare it to the
       * last added char in stackArray and return 'invalid' if they are not
       *  a bracket pair
       */
      let last = stackArray.pop(); // returns last added char in stackArray
      if (bracketPairs[last] !== str[i]) return "invalid";
    }
  }

  let result = stackArray.length > 0 ? "invalid" : "valid"; // check if stackArray is empty
  return result;
}

module.exports = isValid;
