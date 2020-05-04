/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */

function isValid(str) {
  if (str.startsWith("}") || str.startsWith("]") || str.startsWith(")")) {
    return "invalid";
  }
  const stack = [];
  const match = ["()", "[]", "{}"];
  const result = str.split("");
  const len = str.length;
  for (let i = 0; i < len; i++) {
    if (result[i] == "{" || result[i] == "(" || result[i] == "[") {
      stack.push(result[i]);
    } else {
      const index = str.indexOf(result[i]);
      var stackLength = stack.length - 1;
      const data = stack[stackLength] + str[index];
      if (match.includes(data)) {
        stack.pop();
      }
    }
  }

  return stack.length ? "invalid" : "valid";
}

module.exports = isValid;
