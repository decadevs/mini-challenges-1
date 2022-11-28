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
  // If length of string is not divisible by 2 then a bracket does not have a pair
  let splitStr = str.split("")
  let Arr = [];
  // used to hold lefty brackets temporarily "([{"
  for(let i =0; i < splitStr.length; i++){
    if(splitStr[i] === '(' || splitStr[i] === '{' || splitStr[i] === '['){
      Arr.push(splitStr[i])
      // if bracket is lefty push to Arr
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
  // if the first righty bracket to pop up isnt the direct opposite to the last bracket we pushed then invalid
  if (Arr.length > 0){
    return "invalid"
  }
return "valid"
}

console.log(isValid("{}{{}}{{{}}}{{{{}}}}{}{}{}"))
module.exports = isValid;

