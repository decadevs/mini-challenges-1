/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    let openBracket =[];
    let map = {
    '{':'}',
    '(':')',
    '[':']',
        }
  if (str.length % 2 !== 0){
    return "invalid";
  }
  for (let i=0; i<str.length; i++){
    if (str[i] === '(' || str[i] === '{' || str[i] === '[' ){
      openBracket.push(str[i]);
    }
    else  {
      let lastOpenBracket = openBracket.pop();
      if(str[i] !== map[lastOpenBracket] )
      {
        return "invalid";
      
      }
    }
  }
    return (openBracket.length === 0)? "valid": "invalid";
}

module.exports = isValid;
