/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str){
  const stack = [];
  for(let x of str){
      if(x == '(' || x == '{' || x =='[' ){
          stack.push(x)
      }else{
          let lastEntry = stack.pop()
          if(lastEntry === '(' && x !== ')' 
              || lastEntry === '{' && x !== '}' 
              || lastEntry === '[' && x !== ']'
              || !lastEntry
            ) return 'invalid' 
      }
  }

  if(stack.length > 0) return 'invalid'

  return 'valid'
}

module.exports = isValid;
