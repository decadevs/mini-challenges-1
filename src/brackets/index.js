/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
// let isBalanced = (input) => {
//   iterate through input
// 	if the current element is an opening bracket, record the correct closing bracket
//     if the current element is a closing bracket, check the record to make sure it is the correct closing bracket
//   if all the opening and closing brackets are matched and in the correct order, return true, otherwise return false
// }

// function isValid(str) {
// //Iterate through inputs

// }


function isValid(str){

  let brackets = "[]{}()"
  let stack = []

  for(let bracket of str) {
    let bracketsIndex = brackets.indexOf(bracket)

    if (bracketsIndex === -1){
      continue
    }

    if(bracketsIndex % 2 === 0) {
      stack.push(bracketsIndex + 1)
    } else {
      if(stack.pop() !== bracketsIndex) {
        return "invalid";
      }
    }
  }
  return stack.length === 0 ? "valid" : "invalid";
}


console.log(isValid("{[]"));



module.exports = isValid;
