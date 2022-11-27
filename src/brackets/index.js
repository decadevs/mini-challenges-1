/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */

function isValid(str) {
     const stack = [];

     for (const i of str) {
       if (i === "{" || i === "[" || i === "(") {
         stack.push(i);
       } else if (i === "}" && stack.pop() !== "{") {
         return "invalid";
       } else if (i === "]" && stack.pop() !== "[") {
         return "invalid";
       } else if (i === ")" && stack.pop() !== "(") {
         return "invalid";
       }
     }

     return stack.length > 0 ? "invalid" : "valid";
}

module.exports = isValid;
