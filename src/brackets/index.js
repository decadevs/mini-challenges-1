/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
  // Set the stack array to empty
  let stackArr = [];

  // Loop through the array
   for(let i = 0; i < str.length; i++) {
   // Set the last symbol in the array and assign a variable
   let parenthesis = str[i];

   // Set the last symbol in the array and assign a variable
   let lastElInArr = stackArr[stackArr.length - 1];

   // Set condition for the symbols in the array
   //** Current element is an open bracket */
   if(parenthesis == "(" || parenthesis == "[" || parenthesis == "{") {
     // Push the symbol(s) to the stackArr
     stackArr.push(parenthesis);
   }

   // Set condition to check if current symbol is a closing bracket and the last symbol is its opening counterpart.
   else if((parenthesis == ")" && lastElInArr == "(") || (parenthesis == "]" && lastElInArr == "[") || (parenthesis == "}" && lastElInArr == "{")) {
     // We remove the last symbol in the array
     stackArr.pop();
   } else {
     // If the closing symbol is not the direct opposite of the opening symbol.
     return "invalid";
   }

  };
  // If the array has any parenthesis left
  let finalEl = stackArr.length > 0 ? "invalid" : "valid";
  //  Return the array
  return finalEl;}

module.exports = isValid;
