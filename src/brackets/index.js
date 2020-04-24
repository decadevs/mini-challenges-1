/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
  let openBrackets = [];
  let closedBrackets = [];
  let dict = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  // Seperating open and closed brackets into different arrays
  for (let bracket of str) {
    if (bracket == "(" || bracket == "[" || bracket == "{") {
      openBrackets.push(bracket);
    } else {
      closedBrackets.push(bracket);
    }
  }

  // Creating a function to check equal number of specific brackets
  function checkError(array, arr) {
    // Creating a character Map
    function getCharMap(arrayy) {
      let charMap = {};

      for (let char of arrayy) {
        if (!charMap[char]) {
          charMap[char] = 1;
        } else {
          charMap[char]++;
        }
      }

      return charMap;
    }

    let temp = [];

    for (let each of array) {
      temp.push(dict[each]);
    }

    let charMaptemp = getCharMap(temp);
    let charMaparr = getCharMap(arr);

    // Comparing character Maps
    for (let char in charMaptemp) {
      if (charMaptemp[char] !== charMaparr[char]) {
        return true;
      }
    }

    return false;
  }

  if (
    openBrackets.length != closedBrackets.length ||
    str.includes("(]") ||
    str.includes("(}") ||
    str.includes("[)") ||
    str.includes("[}") ||
    str.includes("{)") ||
    str.includes("{]") ||
    checkError(openBrackets, closedBrackets)
  ) {
    return "invalid";
  } else {
    return "valid";
  }
}

module.exports = isValid;
