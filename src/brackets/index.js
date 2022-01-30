/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
 if(str[0]===")"||str[0]==="]"||str[0]==="}"||str[str.length-1]==="("||str[str.length-1]==="{"||str[str.length-1]==="[")
   return `invalid`
}

module.exports = isValid;
