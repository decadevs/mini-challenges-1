/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
  arrayStr = str.split('');
  const openBrace = ["(", "[", "{"];
  const closeBrace = [")", "]", "}"];
  let array = [];

  for (let i = 0; i < arrayStr.length; i++) {
    array.push(arrayStr[i]);

    let lastElement = array[array.length - 1];
    //Check that the last element is a close bracket and
    //that it index is the same with it open braket.
    if (closeBrace.indexOf(lastElement) !== -1 &&
    closeBrace.indexOf(lastElement) ===
    openBrace.indexOf(array[array.length - 2])) {
      array.splice(array.length - 2);  //Remove the last two elements
    }
  }
  //Check whether or not the array is now empty after the loop
  if (array.length === 0) {
    return "valid";
  } else {
    return "invalid";
  }
}

module.exports = isValid;
