/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
  let bracketsArray = [];
  let elem;

  for (let i = 0; i < str.length; i++) {
    elem = str[i];
      if (elem === '{' || elem === '(' || elem === '[') {
        bracketsArray.push(elem);
      }

      let poppedBracket;
      switch (elem) {
        case '}' :
          poppedBracket = bracketsArray.pop();
          if (poppedBracket !== '{')
            return 'invalid'
          break;
        case ']' :
          poppedBracket = bracketsArray.pop();
          if (poppedBracket !== '[')
            return 'invalid';
          break;
        case ')' :
          poppedBracket = bracketsArray.pop();
          if (poppedBracket !== '(')
            return 'invalid'
          break;
      }
    }
    if (bracketsArray.length === 0) {
      return 'valid';
    } else {
      return 'invalid';
    }
}

module.exports = isValid;
