/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
/*
function isValid(str) 
{ 
    let brackets = "[]{}()<>";
    let stack = [];


    for(let bracket of input) 
    {
     let bracketsIndex = brackets.indexOf(bracket)   
   
    if(bracketsIndex % 2 ===0) 
    {
       stack.push(bracketsIndex + 1)
   
    if (stack.pop() !== bracketsIndex) 
    {
        return "invalid"
    }
   } 

   }
}
*/
function isValid(str) {

    if (str.length <= 1)
      return "invalid"
    // MOB mathching opening Bracket
    //cB closing Brackets
    //oB Opening Brackets
    let mOB, ch
    let stack = []
  
    let oB = ['[', '{', '(']
    let cB = [']', '}', ')']
  
    for (let i = 0; i < str.length; i++) {
      ch = str[i]
  
      if (cB.indexOf(ch) > -1) {
        mOB = oB[cB.indexOf(ch)]
        if (stack.length == 0 || (stack.pop() != mOB)) {
          return "invalid"
        }
      } else {
        stack.push(ch)
      }
    }
     
    if ((stack.length == 0)==true) {
        return "valid"
    } else {
        return "invalid"
    }
  };
  
  

module.exports = isValid;
