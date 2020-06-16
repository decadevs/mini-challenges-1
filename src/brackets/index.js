/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str){
  const stack = [];

const brackets = {
      '(' : ')',
      '{': '}',
      '[' : ']'
  }

for(bracket of str){
  if(brackets[bracket]){
      stack.push(bracket);
  }else{
      let lastEntry = stack.pop();
      if(brackets[lastEntry] !== bracket){
          return 'invalid';
      }
  }
}
if(stack.length > 0) return 'invalid';
return 'valid';

}

module.exports = isValid;
