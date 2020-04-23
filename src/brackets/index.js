/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
  let ck;
  let emptyArray = [];
  let map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  let end;

  for (let i = 0; i < str.length; i++) {
    ck = str[i];
    if (ck === "(" || ck === "{" || ck === "[") {
      emptyArray.push(ck);
    } else {
      end = emptyArray.pop();
      if (ck != map[end]) {
        return "invalid";
      }
    }
  }
  if (emptyArray.length !== 0) {
    return "invalid";
  }
  return "valid";
}

module.exports = isValid;
