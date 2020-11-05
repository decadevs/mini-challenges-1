/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    let detect = []
    for(let i=0;i < str.length; i++){
      if ( str[i] === "(" || str[i] === "{" || str[i] === "["){
        detect.push(str[i])
      } else{
        if(str.length === 0) return "invalid"
        let lastValue = detect[detect.length-1]
        if( (str[i] === ']' && lastValue === '[') || (str[i] === '}' && lastValue === '{') || (str[i] === ')' && lastValue === '('))
        {
          detect.pop()
        } else {
         return "invalid";
        }
      }
    }    if(detect.length === 0){return "valid"}
   else{return "invalid"};
  }


module.exports = isValid;
