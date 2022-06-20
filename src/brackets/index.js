/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
  const input = str.split("");
  const openBrackets = ["(", "{", "["];
  const closeBrackets = [")", "}", "]"];

  const result = [];

  for (let i = 0; i < input.length; i++) {
        // if input[i] is in openBrackets
    if (openBrackets.includes(input[i])) {
      result.push(input[i]);
      // console.log(openBrackets);
    } else if (closeBrackets.includes(input[i])) {
      // console.log(closeBrackets);
      const position = closeBrackets.indexOf(input[i]);
      // console.log(position);
      if (
        result.length === 0 ||
        result[result.length - 1] !== openBrackets[position]
      ) {
        return "invalid";
      } else {
        result.pop();
      }
    }
  }
  if (result.length === 0) {
   return "valid";
  } else {
    return "invalid";
  }
}

module.exports = isValid;
