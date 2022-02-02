/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */

function isValid(str) {
  let open = []; //creates an empty array

  if (str.length % 2 !== 0) {
    //This checks for the length of bracket character passed in, an odd number means no matching bracket
    return "invalid";
  }

  const openBrackets = new Set(["(", "[", "{"]); // a new instance of the acceptable brackets is created

  const bracketCorrespondence = {
    //acceptable corresponding matching closing brackets in key value pairs
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let bracketType of str) {
    //loop through the string input
    if (openBrackets.has(bracketType)) {
      open.push(bracketType);
    } else if (
      bracketCorrespondence[bracketType] &&
      open.pop() !== bracketCorrespondence[bracketType]
    ) {
      //this lines checks whether the brackets match appropriately
      return "invalid";
    }
  }

  if (open.length == 0) {
    return "valid";
  } else {
    return "invalid";
  }
}

module.exports = isValid;
