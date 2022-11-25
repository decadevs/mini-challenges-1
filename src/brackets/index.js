/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */

function isValid(str) {
  const myArray = str.split("");
  let normalBracketCounter = 0;
  let sqBracketCounter = 0;
  let curlyBracketsCounter = 0;

  let arrayLength = myArray.length - 1;

  if (
    (myArray[0] === "(" && myArray[arrayLength] === ")") ||
    (myArray[0] === "{" && myArray[arrayLength] === "}") ||
    (myArray[0] === "[" && myArray[arrayLength] === "]")
  ) {
    // checking and validating the string
    for (let i = 0; i < myArray.length; i++) {
      // loop through each character
      const j = myArray[i]; // assign each character of the array to the variable j
      if (j === "(") {
        normalBracketCounter++; //increments the normal bracket
      } else if (j === ")") {
        normalBracketCounter--; //decrements the normal brackets
      } else if (j === "{") {
        curlyBracketsCounter++; // increments the curly brackets
      } else if (j === "}") {
        curlyBracketsCounter--; // decrements the curly brackets
      } else if (j === "[") {
        sqBracketCounter++; // increments the square brackets
      } else if (j === "]") {
        sqBracketCounter--; // decrements the square brackets
      }
    }
    if (
      normalBracketCounter === 0 &&
      sqBracketCounter === 0 &&
      curlyBracketsCounter === 0
    ) {
      console.log("valid"); // show valid
    } else {
      console.log("invalid"); // show invalid
    }
  } else {
    console.log("invalid"); // show invalid
  }
}

module.exports = isValid;
