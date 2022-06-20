/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {

  const newStr = "(){}[]";
  const arr = [];
  for (let i of str) {
    console.log(i);
    let current = newStr.indexOf(i);
    if (current % 2 == 0) {
      arr.push(current + 1);
    } else {
      if (arr.pop() !== current) {
        return "invalid";
      }
    }
  }
  if (arr.length !== 0) {
    return "invalid";
  } else {
    return "valid";
  }
}

module.exports = isValid;
