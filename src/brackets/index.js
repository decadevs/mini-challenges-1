/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
  const stack = []
  for(let bracketType of str) {
    if(bracketType == '(' || bracketType == '{' || bracketType == '['){
      stack.push(bracketType)
    }
    else {
      let lastEntry = stack.pop()
      if(lastEntry === '(' && bracketType !== ')' || lastEntry === '{' && bracketType !== '}' || lastEntry === '[' && bracketType !== ']' || !lastEntry) return "invalid"
    }
  }
  if(stack.length > 0) return "invalid"
  return "valid"
}

module.exports = isValid;
