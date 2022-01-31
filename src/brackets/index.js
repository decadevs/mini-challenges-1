/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */

function isValid(str) {

  // For the project to be valid, both rule1 and rule2 must be true
  // The rule1 determines if the brackets have equal length while the rule2 checks if while a specific bracket is open, every other enclosed pair of brackets that is opened should be closed before the encompassing bracket closes.
  let rule1 = false
  let rule2 = false;

  let openingBracket1 = "";
  let openingBracket2 = "";
  let openingBracket3 = "";
  let closingBracket1 = "";
  let closingBracket2 = "";
  let closingBracket3 = "";


  let closingBracket1Rule = true;
  let closingBracket2Rule = true;
  let closingBracket3Rule = true;


// This loop is used to get the total number of each bracket present
  for (let i = 0; i < str.length; i++){
    if(str[i] == "{"){
      openingBracket1 += str[i];
    }
    if(str[i] == "}"){
      closingBracket1 += str[i];
    }
    if(str[i] == "("){
      openingBracket2 += str[i];
    }
    if(str[i] == ")"){
      closingBracket2 += str[i];
    }
    if(str[i] == "["){
      openingBracket3 += str[i];
    }
    if(str[i] == "]"){
      closingBracket3 += str[i];
    }
  }


  // This loop is used to check If an opened bracket is closed in between another opened bracket or not. If it is then change the particular bracket to false

  for(let j = 0; j < str.length; j++){
    if(str[j] === "}"){
      if(str[j - 1] == "(" ||str[j - 1] == "[") {
        closingBracket1Rule = false
      }
    }
    if(str[j] === ")"){
      if(str[j - 1] == "[" || str[j - 1] == "{"){
        closingBracket2Rule = false
      }
    }
    if(str[j] === "]"){
      if(str[j - 1] === "(" || str[j - 1] === "{"){
        closingBracket3Rule = false
      }
    }
  }


  // If all bracket equals then rule1 becomes true
  if(openingBracket1.length === closingBracket1.length && openingBracket2.length === closingBracket2.length && openingBracket3.length === closingBracket3.length){
    rule1 = true
  }

// If all the brackret is true rule2 becomes true
  if(closingBracket1Rule && closingBracket2Rule && closingBracket3Rule){
    rule2 = true
  }

//  if both rule 1 and rule 2 is true then the given bracket string is valid

  if(rule1 && rule2){
    return "valid"
  }

  // If either rule 1 or rule 2 is false return invalid
  return "invalid"
}

module.exports = isValid
