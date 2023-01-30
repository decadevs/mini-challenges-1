/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */


//Defining a function called "isValid" which takes in a single input, a string.
function isValid(str) {
    //Checking if the length of the string is odd, and if it is,
    //it immediately returns the string "invalid".
    if(str.length % 2 === 1) return "invalid";
    //Initializes an empty array called "pile", representing a STACK.
    let pile = [];
    //Using a for loop to iterate through each character in the input string.
    for(let i = 0; i < str.length; i++){
      //If the character is an opening bracket (i.e. '(', '[', or '{'),
      //it pushes it to the "pile" array.
      if(str[i]==="(" || str[i]==="[" || str[i]==="{"){
        pile.push(str[i]);
      } else {
        //If the character is a closing bracket (i.e. ')', ']', or '}'),
        //it checks if the last bracket in the "pile" array is the
        //corresponding opening bracket. If it is, it pops the last bracket
        //from the array. If it is not, it immediately returns "invalid".
        let lastBrackets = pile.pop();
        if(!(str[i]===")" && lastBrackets==="(" ||
            str[i]==="]" && lastBrackets==="[" ||
            str[i]==="}" && lastBrackets==="{")){
              return "invalid";
            }
      }
    }
    //After the for loop, it checks if the "pile" array is empty or not.
    //If it is not empty, it returns "invalid". If it is empty, it returns "valid".
    if(pile.length !== 0){
      return "invalid";
    }
    return "valid";
  }

  console.log(isValid("[[(])]"));
  console.log(isValid("[[()]]"));
  module.exports = isValid; 
