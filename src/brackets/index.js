/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(param) {
  let check = [];
  let bracket = { ')': '(', '}': '{', ']': '['};
  for (let i of param) {
    if (!bracket[i]){
       check.push(i);
    } else if (check.pop() !== bracket[i]) {
        return "invalid";
    }
  }
  if (check.length === 0) {
    return "valid";
  }
}

/*console.log(isValid(`{[()[]]()}()`))
console.log(isValid(`[(])`))
console.log(isValid("}{{{{}}}}{([])(((()))){"))*/
module.exports = isValid;
