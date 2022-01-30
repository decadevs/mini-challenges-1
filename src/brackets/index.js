/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */

function isValid(str) {
  let store = [];
  if(str.length % 2 !== 0) return "invalid";
  for(let char of str) {
    if(char === "(" || char === "{" || char === "[") {  // If character is an opening bracket...
      store.push(char)
    } else if((char === ")" && store[store.length - 1] === "(") ||
              (char === "}" && store[store.length - 1] === "{") ||
              (char === "]" && store[store.length - 1] === "[")) { // If character is a closing bracket and last item stored is a matching open pair...
      store.pop()
    } else return "invalid"

  }
  return store.length ? "invalid" : "valid"

}

module.exports = isValid;
