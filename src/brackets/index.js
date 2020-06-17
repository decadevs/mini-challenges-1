/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    if (str.length <= 1) return "invalid"
    const matchingBrackets = {
        '(':')',
        '[':']',
        '{':'}'
    };
    let stack = [];
    for (let i = 0; i < str.length; i++) {
      if (matchingBrackets[str[i]]){
        stack.push(matchingBrackets[str[i]]);
      }
      else {
        if (str[i] !== stack.pop()) {
          return "invalid";
        }
      if (stack.length > str.length - i) return "invalid";
      }
    }
    if ((stack.length == 0)==true) {
      return "valid"
  } else {
      return "invalid"
  }

};

module.exports = isValid;
