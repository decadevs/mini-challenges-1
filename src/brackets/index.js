/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */

function isValid(str) {
  const bracketArray = str.split(""); // Converting the input String of brackets to a new Array of brackets

  if (bracketArray[0] === "}" || bracketArray[0] === "]" || bracketArray[0] === ")") {
    // Checking for wrong bracket input
    return "invalid";
  }

  let newArray = [];  // Initializing a new Array to hold the valid brakcet inputs

  for (let bracket = 0; bracket < bracketArray.length; bracket++) {    // Looping through the Bracket Array
    if (bracketArray[bracket] === "[" || bracketArray[bracket] === "(" || bracketArray[bracket] === "{") {
      newArray.push(bracketArray[bracket]);
    }

    if (newArray[newArray.length - 1] === "(" && bracketArray[bracket] === ")") {
      newArray.pop();
    } else if (newArray[newArray.length - 1] === "[" && bracketArray[bracket] === "]") {
      newArray.pop();
    } else if (newArray[newArray.length - 1] === "{" && bracketArray[bracket] === "}") {
      newArray.pop();
    }
  }

  if (newArray.length === 0) {
    return "valid";
  } else {
    return "invalid";
  }
}

module.exports = isValid;
