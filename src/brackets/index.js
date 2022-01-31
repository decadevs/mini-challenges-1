/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {

   //initialise an empty temporary stack to store the strings
   let tmpStack = []

   //looop through the string to the comparisons
   for (i = 0; i < str.length; i++){

     //assign the value of the last element in the stack to a varable leEle to make it easier
     let lEle = tmpStack[tmpStack.length -1]

     //check a condition that the current string is opening brackets and push, if not jump to the else
     if (str[i] == "(" || str[i] == "{" || str[i] == "["){
       tmpStack.push(str[i])
     }
     //if not the opening brackets, check the second condition for matching brackets with the last element on the stack and pop
     else if((lEle == "(" && str[i] == ")") || (lEle == "{" && str[i] == "}") ||
     (  lEle == "[" && str[i] == "]")){
         tmpStack.pop()
     }
     //if not any of the above then invalid
     else return 'invalid'
   }
   //then the stack should be empty at the end of the operations for valid cases
   return tmpStack.length ? 'invalid' : 'valid'
}

module.exports = isValid;
