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
      let splitted = str.split("")
      let finalArr = [];
      
      for(let i =0; i < splitted.length; i++){
        if(splitted[i] === '(' || splitted[i] === '{' || splitted[i] === '['){
          finalArr.push(splitted[i])
          console.log(finalArr)
        }
        if(splitted[i] === '}'){
          let test = finalArr.pop();
          if(test !== '{'){
            return "invalid"
          }
        }
        if(splitted[i] === ')'){
                let test = finalArr.pop();
                if(test !== '('){
                    return 'invalid'
                }
            }
            if(splitted[i] === ']'){
                let test = finalArr.pop();
                if(test !== '['){
                    // console.log('here')
                    return 'invalid'
                }
            }
      }
      if (finalArr.length > 0){
        return "invalid"
      } 
    return "valid"
}
console.log(isValid("{[()[]]()}()"))



module.exports = isValid;
