/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) 
{

  let openBracket = ['{', '[', '('];
  let closeBracket = ['}', ']', ')'];

  let stack = [];

  for (let i = 0; i < str.length; i++) {
      if (openBracket.indexOf(str[i]) >= 0) {
          stack.push(str[i]);
      } else {
          if (closeBracket.indexOf(str[i]) != openBracket.indexOf(stack.pop())) {
              return "invalid";
          }
      }
  }

  if (stack.length > 0) {
      return "invalid";
  }

  return "valid";
};



module.exports = isValid;
