/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
  const strArr = str.split("");
  const resultArr = [];
  for (let i = 0; i < str.length; i++) {
    if (strArr[i] == "{" || strArr[i] == "[" || strArr[i] == "(") {
      resultArr.push(strArr[i]);
    }
    if (strArr[i] == "}" || strArr[i] == "]" || strArr[i] == ")") {
      if (resultArr[resultArr.length - 1] == "{" && strArr[i] == "}") {
        resultArr.pop();
      } else if (resultArr[resultArr.length - 1] == "[" && strArr[i] == "]") {
        resultArr.pop();
      } else if (resultArr[resultArr.length - 1] == "(" && strArr[i] == ")") {
        resultArr.pop();
      } else {
        return "invalid";
      }
    }
  }
  return resultArr.length === 0 ? "valid" : "invalid";
}

module.exports = isValid;
