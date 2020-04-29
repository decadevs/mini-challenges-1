/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
  //Declare variable
  let brackets = "()[]{}";
  let stack = [];
  
  for(let bracket of str){
    // get index of bracket in brackets
    let bracketsIndex = brackets.indexOf(bracket);

    if(bracketsIndex % 2 === 0){
      stack.push(bracketsIndex + 1);
    }else{
      if(stack.pop() !== bracketsIndex){
        return "invalid";
      }
    }
  }

  //Return valid or inValid
 return (stack.length === 0) ? "valid" : "invalid";
}

module.exports = isValid;
