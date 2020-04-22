/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
  var openBrackets = [];
  var closedBrackets = [];

  for (let bracket of str) {
    if (bracket == "(" || bracket == "[" || bracket == "{") {
      openBrackets.push(bracket);
    } else {
      closedBrackets.push(bracket);
    }
  }

  if (
    openBrackets.length != closedBrackets.length ||
    str.includes("(]") ||
    str.includes("(}") ||
    str.includes("[)") ||
    str.includes("[}") ||
    str.includes("{)") ||
    str.includes("{]")
  ) {
    return "invalid";
  } else {
    return "valid";
  }
}

module.exports = isValid;
