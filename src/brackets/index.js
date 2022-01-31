/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
 function isValid(str) {
   //create an empty array
  let myStack=[]
  //loop through the string
  for(let i =0; i<str.length; i++) {
    let result = myStack[myStack.length -1]
    //conditions that checks for all opening bracket to be pushed into tha empty array and all matching bracket should be deleted from the array
    if(str[i] == "(" || str[i] == "[" || str[i]=="{"){
      myStack.push(str[i])
    }
  else if ((result == "(" && str[i] == ")") || (result == "[" && str[i] == "]") || (result == "{" && str[i] == "}")) {
    myStack.pop()
  }
  else return "invalid"
    }


return myStack.length ? "invalid" : "valid";
}

isValid("(){}")

module.exports = isValid;
