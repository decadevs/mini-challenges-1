/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
  if (str.length % 2 !== 0){
    return "invalid"
  }
  let splitStr = str.split("")
  let Arr = [];
  for(let i =0; i < splitStr.length; i++){
    if(splitStr[i] === '(' || splitStr[i] === '{' || splitStr[i] === '['){
      Arr.push(splitStr[i])
    }
    if(splitStr[i] === '}'){
      let temp = Arr.pop();
      if(temp !== '{'){
        return "invalid"
      }
    }
    if(splitStr[i] === ')'){
            let temp = Arr.pop();
            if(temp !== '('){
                return 'invalid'
            }
        }
        if(splitStr[i] === ']'){
            let temp = Arr.pop();
            if(temp !== '['){
                return 'invalid'
            }
        }
  }
  if (Arr.length > 0){
    return "invalid"
  }
return "valid"
}

console.log(isValid("{}{{}}{{{}}}{{{{}}}}{}{}{}"))
module.exports = isValid;

