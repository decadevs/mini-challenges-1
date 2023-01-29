/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
  let bracketsArr = [] // Array for record purposes
  let openingBrackets = '({[' // Variable for storing the opening brackets string
  let closingBrackets = ')}]' // Variable for storing the closing brackets string
  for (let input = 0; input < str.length; input++) { // Iterate through the given string of brackets
    let openingBracketsIndex = openingBrackets.indexOf(str[input]) // Index of the opening brackets with respect to the given string
    let closingBracketsIndex = closingBrackets.indexOf(str[input]) // Index of the closing brackets with respect to the given string
    if (openingBrackets.includes(str[input])) { // Check if the openingBrackets string contains each of given brackets in str
      bracketsArr.push(closingBrackets.indexOf(closingBrackets[openingBracketsIndex])) // If true, push the index of the corresponding closing bracket into the bracketsArr
    } else {
      if ((bracketsArr.pop()) !== closingBracketsIndex) { // If the current element is a closing bracket, check the bracketsArr to ensure it is a corresponding closing bracket
        return 'invalid' // if false, return "invalid"
      }
    }
  }
  return bracketsArr.length === 0 ? `valid` : `invalid` // If all the brackets are matched, the bracketsArr will be empty. Return 'valid', else return 'invalid'
}

module.exports = isValid;
