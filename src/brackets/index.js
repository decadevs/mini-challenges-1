/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
  let stack = [];
  let brackets = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  for (let i = 0; i < str.length; i++) {
    if (brackets[str[i]]) {
      stack.push(str[i]);
    } else if (brackets[stack[stack.length - 1]] === str[i]) {
      stack.pop();
    } else {
      return "invalid";
    }
  }
  return stack.length === 0 ? "valid" : "invalid";
}

module.exports = isValid;
