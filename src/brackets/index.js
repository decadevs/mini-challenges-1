/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(param) {
  let check = [];
  let bracket = { ')': '(', '}': '{', ']': '['}; //Keys the closing brackets to the opening brackets for each bracket type
  for (let i of param) {
    if (!bracket[i]){ //Checks the individual indexs of th parameter against the values of the bracket object
       check.push(i);
    } else if (check.pop() !== bracket[i]) { // Checks if the opening bracket matches the closing bracket
        return "invalid";
    }
  }
  if (check.length === 0) { //If array length is 0 sequence of brackets is valid
    return "valid";
  }
}

/*console.log(isValid(`{[()[]]()}()`))
console.log(isValid(`[(])`))
console.log(isValid("}{{{{}}}}{([])(((()))){"))*/
module.exports = isValid;
