/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */

 function isValid(str) {

  //initialise an empty value resultIn to store the strings
  let resultIn = []

  //looop through the string to the comparisons
  for (i = 0; i < str.length; i++){

    //assign the value of the last element in a varable temps to resultIn make it easier
    let temps = resultIn[resultIn.length -1]

    //check a condition that the current string is opening brackets and push, if not jump to the else
    if (str[i] == "(" || str[i] == "{" || str[i] == "["){
      resultIn.push(str[i])
    }
    //if not the opening brackets, check the second condition for matching brackets with the last element on the resultIn and pop
    else if((temps == "(" && str[i] == ")") || (temps == "{" && str[i] == "}") ||
    (  temps == "[" && str[i] == "]")){
        resultIn.pop()
    }
    //if not any of the above then invalid
    else return 'invalid'
  }
  //then the stack should be empty at the end of the operations for valid cases
  return resultIn.length ? 'invalid' : 'valid'
};

module.exports = isValid;

