/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
  const collections = []
  for(let character of str) {
    if(character === '(' || character === '{' || character === '['){
      collections.push(character)
    }
  }
}

module.exports = isValid;
