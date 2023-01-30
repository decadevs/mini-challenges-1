/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
  let stack = [];


  for (var i = 0; i < str.length; i++ ) {
    let bracket = str[i];
    if (bracket == "(" || bracket == "{" || bracket == "[") {
      stack.push(bracket);
      continue;
      }
    if (stack.length == 0) {
        return false;
    }

    let confirmClose;
    switch (bracket) {
      case ")":
          confirmClose = stack.pop();
          if (confirmClose != "(")
            return false;
          break;

      case "}":
          confirmClose = stack.pop();
          if (confirmClose != "{")
            return false;
          break;

      case "]":
          confirmClose = stack.pop();
          if (confirmClose != "[")
            return false;
          break;

    }
  } return (stack.length == 0);
}


module.exports = isValid;
