/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
  //initialize variables
  let opening = ["(", "[", "{"];
  let closing = [")", "]", "}"];;
  let stack = [];
  //loop through the string
  //push all opening brackets into the stack
  //for every closing bracket, removee the corresponding opening bracket from the stack which is at the top
  //if closing bracket doesnt correspond with the last-in bracket in stack, return invalid
  for (let i = 0; i < str.length; i++) {
    if (opening.includes(str[i])) {
      stack.push(str[i])
    }
    else if (closing.includes(str[i])) {
      let index = closing.indexOf(str[i])
      if (stack.length === 0 || stack[stack.length - 1 ]!== opening[index]) {
        return "invalid"
      }
      else {
        stack.pop();
      }
    }
  }
  //at the end, for valid pairs, stack must be empty
  return stack.length === 0 ? "valid" : "invalid";
}

module.exports = isValid;
