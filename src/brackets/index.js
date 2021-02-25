/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */


var map = {

  "(": ")",
  "[": "]",
  "{": "}"

}

function isValid(str) {

  var stack = [];

  for (var i = 0; i < str.length; i++) {

    if (str[i] === '(' || str[i] === '{' || str[i] === '[') {

      stack.push(str[i]);

    } else {

      let last = stack.pop();

      if (str[i] !== map[last]) {
        return "invalid";
      }

    }
  }

  if (stack.length !== 0) {
    return "invalid";
  }

  return "valid";

}

module.exports = isValid;
