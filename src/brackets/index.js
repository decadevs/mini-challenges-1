var checkPair = require("./checkPair")

/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */

function isValid(str) {

    var arr = str.split("");
    var stack = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === "(" || arr[i] === "{" || arr[i] === "[") {
        stack.push(arr[i]);
      } else if (arr[i] === ")" || arr[i] === "}" || arr[i] === "]") {
        if (checkPair(stack[stack.length-1], arr[i]) === true) {
          stack.pop();
        } else if (checkPair(stack[stack.length-1], arr[i]) === false) {
          stack.push(arr[i]);
        }
      } 
    }
    if (stack.length === 0) {
      return "valid";
    } else {
      return "invalid"
    }

}

module.exports = isValid;





  
  
  
  
  