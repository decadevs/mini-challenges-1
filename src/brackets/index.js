/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
 function isValid(str) {
    const capture = [];
    const parentObj = {
      "(" : ")",
      "{" : "}",
      "[" : "]"
    }
    if(Object.values(parentObj).includes(str[0])) {
      return 'invalid';
    }
    for (let i=0; i< str.length; i++){
      if(Object.keys(parentObj).includes(str[i])){
        capture.push(str[i])
      } else {
        if(parentObj[capture[capture.length-1]] != str[i]) {
          return "invalid";
        } else {
          capture.pop()
        }
      }
    }
    return capture.length == 0 ? 'valid' : "invalid";
  }
  module.exports = isValid;
