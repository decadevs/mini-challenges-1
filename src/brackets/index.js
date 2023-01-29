/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 * 
 * 
 */
 
function isValid(str) {

    /* allBrackets store all posible brackets and a stack for push and pop */
    
      let allBrackets = "[]{}()"
      let stack = []
    /* loop and store index */
    
      for(let bracket of str) {
        let allBracketsIndex = allBrackets.indexOf(bracket)
    
    /*edge case*/
        if (allBracketsIndex === -1){
          continue
        }
    
    /*pick out even index they have open bracket values and push the index into stack*/
    
    
        if(allBracketsIndex % 2 === 0) {
          stack.push(allBracketsIndex + 1)
        } else {
          
          if(stack.pop() !== allBracketsIndex) {
            return "invalid";
          }
        }
    
    
    
      }/*if stack is empty all brackets match else one didnt*/
      return stack.length === 0 ? "valid" : "invalid"
    }
    
    
    
    
    module.exports = isValid;
    