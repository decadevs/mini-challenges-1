/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */

function isValid(str) {
    //create a container variable to hold closing brackets
  let container = [];

  //declare and initialize both opening and closing brackets
  let openingBrackets = "{[(";
  let closingBrackets = "}])";

//create a loop that will run through the inputted string of brackets 
  for (let index = 0; index < str.length; index++) {

    //declare indexes for opening and closing brackets
    let openingBracketsIndex = openingBrackets.indexOf(str[index]);
    let closingBracketsIndex = closingBrackets.indexOf(str[index]);

    if (openingBrackets.includes(str[index])) {

 //push closing brackets to the container with the corresponding index of the opening bracket       
      container.push(closingBrackets[openingBracketsIndex]);
    } else {
        
 //if str[index] is not an opening bracket, pop the container      
      if (container.pop() !== closingBrackets[closingBracketsIndex]) {
        return "invalid";
      }
    }
  }

  return container.length === 0 ? `valid` : `invalid`;
}
console.log(isValid("{[()[]]()}()"));
console.log(isValid(")}()"));

module.exports = isValid;
