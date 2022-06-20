/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    
        // define stack as openingBracketArray
        let openingBracketArray = [];
      
        if (str.length % 2 != 0) {
          return "invalid";
        }
        for (let i of str) {
          if (i === "(" || i === "[" || i === "{") {
            openingBracketArray.push(i);
          } else if (
            openingBracketArray.length != 0 &&
            i === ")" &&
            openingBracketArray[openingBracketArray.length - 1] === "("
          ) {
            openingBracketArray.pop();
          } else if (
            openingBracketArray.length != 0 &&
            i === "]" &&
            openingBracketArray[openingBracketArray.length - 1] === "["
          ) {
            openingBracketArray.pop();
          } else if (
            openingBracketArray.length != 0 &&
            i === "}" &&
            openingBracketArray[openingBracketArray.length - 1] === "{"
          ) {
            openingBracketArray.pop();
          } else {
            return "invalid";
          }
        }
        return openingBracketArray.length ? "invalid" : "valid"; 
}
module.exports = isValid;
