/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
  let stack = [];
  let redundantStack = [];

  // Function to check if the incoming closing bracket matches the last open bracket
  const isMatch = (open, close) => {
    if (open === "{" && close === "}") {
      return true;
    } else if (open === "[" && close === "]") {
      return true;
    } else if (open === "(" && close === ")") {
      return true;
    }
    return false;
  };

  const newArr = Array.from(str);

  newArr.forEach((i) => {
    // Check for the opening brackets and push in the stack
    if (i === "[" || i === "{" || i === "(") {
      stack.push(i);
    }
    // If closing bracket matches with opening bracket and remove from stackclear if true
    else if (isMatch(stack[stack.length - 1], i)) {
      stack.pop();
    }
    // Push redundant brackets into redundant stack
    else {
      redundantStack.push(i);
    }
  });

  // return statement here

  if (stack.length > 0 || redundantStack.length > 0) {
    return "invalid";
  } else {
    return "valid";
  }
}

module.exports = isValid;
