/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
  const open = [];

  const bracketObj = {
    "(" : ")",
    "{" : "}",
    "[" : "]"
  }

  if(Object.values(bracketObj).includes(str[0])) {
    return 'invalid';
  }
  for (let i=0; i< str.length; i++){
    if(Object.keys(bracketObj).includes(str[i])){
      open.push(str[i])
    } else {
      if(bracketObj[open[open.length-1]] != str[i]) {
        return "invalid";
      } else {
        open.pop()
      }
    }
  }

  return open.length == 0 ? 'valid' : "invalid";
}

module.exports = isValid;
