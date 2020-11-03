/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    let arr = [];
    let obj = {
      '(' : ')',
      '{' : '}',
      '[' : ']'
    };
    if(str.length == 0) {return 'Put valid Character'};
    for(let i = 0; i < str.length; i++) {
      if(str[i] == '(' || str[i] == '{' || str[i] == '[' ) {
        arr.push(str[i]);
      } else {
        let end = arr.pop();
        if(str[i] !== obj[end]) {return 'inValid'}
      }
    }
      if(arr.length !== 0) {return 'inValid'}
    return 'valid';
  }
  
  console.log(isValid("[]"));

module.exports = isValid;
