/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
  //create empty array to store the open brackets
  let openBrackets = [];
  //create object to store key value pair of open and closed brackets
  let pairs = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  //traverse through the string and add open brackets
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(" || str[i] === "[" || str[i] === "{") {
      openBrackets.push(str[i]);
      //if bracket is closed, remove and compare with the last opened
    } else {
      let closed = openBrackets.pop();
      if (pairs[closed] !== str[i]) {
        return "invalid";
      }
    }
  }
  //check if all opened brackets have been closed
  if (openBrackets.length !== 0) {
    return "invalid";
  } else {
    return "valid";
  }
}

module.exports = isValid;
