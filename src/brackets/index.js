/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */

 function isValid(str) {  // A function isValid to store strings of brackets
    let arrBracket = str.split(""); //
    let openBracket = [];
    if (arrBracket[0] === "]" || arrBracket[0] === "}" || arrBracket[0] === ")" ) {
      return "invalid";
    }
    for (let i = 0; i < arrBracket.length; i++) {
      if (
        arrBracket[i] === "(" ||
        arrBracket[i] === "[" ||
        arrBracket[i] === "{"
      ) {
        openBracket.push(arrBracket[i]);
      }
      console.log(openBracket);
      if (openBracket[openBracket.length - 1] == "(" && arrBracket[i] == ")") {
        openBracket.pop();
      } else if (
        openBracket[openBracket.length - 1] == "[" &&
        arrBracket[i] == "]"
      ) {
        openBracket.pop();
      } else if (
        openBracket[openBracket.length - 1] == "{" &&
        arrBracket[i] == "}"
      ) {
        openBracket.pop();
      }
    }
    if (openBracket.length === 0) {
        return "valid";
      } else {
        return "invalid";
      } 
  }
  
module.exports = isValid;
