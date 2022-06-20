/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
  let stack = [];


  for(let i = 0; i < str.length; i++)
  {
      let x = str[i];

      if (x == '(' || x == '[' || x == '{')
      {

          // Push the element in the stack
          stack.push(x);

      }

      if (stack.length == 0)
          return "invalid";

      let check;
      if (x == ')') {
        check = stack.pop();
        if (check == '{' || check == '['){
          return 'invalid';
        }
      } else if (x == '}'){
        check = stack.pop();
        if (check == '(' || check == '[') {
          return 'invalid';
        }
      } else if (x == ']') {
        check = stack.pop();
        if (check == '(' || check == '{'){
          return 'invalid';
        }
      }
  }

  // Check Empty Stack
  if (stack.length == 0) {
    return 'valid';
  } else {
    return 'invalid';
  }
}

module.exports = isValid;
