/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
 function isValid(str) {
  const openers = "[{(";
  if( str[0]==="]"||str[0]==="}"||str[0]===")"){
    return "invalid"
  }
  obj = {
      '}': '{',
      ']': '[',
      ')': '('
  }
        //"{}{{[[))"
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    //(!openers.includes(str[i]))return "invalid"
      if (openers.includes(str[i])) {
          stack.push(str[i])
      } else {
          let last = stack[stack.length - 1];
          if (obj[str[i]] === last) {
              stack.pop()
          }else{
            return "invalid"
          }

      }
  }
  return stack.length ? 'invalid' : 'valid'

}
console.log(isValid("{}{(())}"))
module.exports = isValid;
