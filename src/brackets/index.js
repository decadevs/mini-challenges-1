/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
  let stack = [];
  let collection = "[]{}()";

  for(let bracket of str){
    let bracketIdx = collection.indexOf(bracket);
    if(bracketIdx % 2 === 0) stack.push(bracketIdx);
    else if(stack.pop() !== bracketIdx) return "Invalid";
  }
  return "valid";
}

module.exports = isValid;
