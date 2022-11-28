/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
 function isValid(str){
    let splitStr = str.split('')
    let stack = []
    
    
    for (let i = 0; i < splitStr.length; i++) {
      
      if(splitStr[i] == '{'){
        stack.push('}')
      }
      
       if(splitStr[i] == '['){
        stack.push(']')
      }
       if(splitStr[i] == '('){
        stack.push(')')
      }
  
      if(splitStr[i] == '}'){
          if(stack[stack.length - 1] == '}'){
            stack.pop()
          }
      }
      if(splitStr[i] == ')'){
          if(stack[stack.length - 1] == ')'){
            stack.pop()
          }
      }
       if(splitStr[i] == ']'){
          if(stack[stack.length - 1] == ']'){
            stack.pop()
          }
      }
    }
  
    if(stack.length == 0){
     console.log('valid')
      return 'valid'
    }else{
      console.log('invalid')
      return 'invalid'
    }
  }

module.exports = isValid;


