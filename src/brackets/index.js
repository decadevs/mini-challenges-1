/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {

  let stack = [];

  if(str.length % 2 !== 0) {
      return "invalid";
    }

 for(let bracket of str) {
      if(bracket === "(" || bracket === "{" || bracket === "[") {
        stack.push(bracket);
      } else if ((bracket === ')' && stack[stack.length -1] === "(") ||
                 (bracket === "}" && stack[stack.length -1] === "{") ||
                 (bracket === "]" && stack[stack.length -1] === "[")) {
         stack.pop();
      } else return "invalid";
   }
     return stack.length ? "invalid" : "valid";
}

module.exports = isValid;
