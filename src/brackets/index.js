/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
const peek = (stack) => stack[stack.length - 1];
function isValid(str) {
  let stack = [];
  let bracketStore = {
    "(": "open",
    ")": "close",
    "[": "open",
    "]": "close",
    "{": "open",
    "}": "close",
  };
  //iterate through every bracket of the string
  for (let i = 0; i < str.length; i++) {
    let bracket = str.charAt(i);
    //if the bracket is an opening bracket push it on the stack
    if (bracketStore[bracket] === "open") {
      stack.push(bracket);
    }
    //if the bracket is a closing bracket make sure it has a matching opening bracket
    else if (bracketStore[bracket] === "close") {
      //if the current input bracket is a round bracket
      if (bracket === ")") {
        if (peek(stack) === "(") {
          stack.pop();
        } else {
          return "invalid";
        }
      }
      //if the current input bracket is a curly bracket
      else if (bracket === "}") {
        if (peek(stack) === "{") {
          stack.pop();
        } else {
          return "invalid";
        }
      }
      //if the current input bracket is a square bracket
      else if (bracket === "]") {
        if (peek(stack) === "[") {
          stack.pop();
        } else {
          return "invalid";
        }
      }
    }
  }
  return stack.length === 0 ? "valid" : "invalid";
}

module.exports = isValid;
