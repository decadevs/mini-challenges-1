/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
  let cheker;
  const myObj = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const values = Object.values(myObj);
  const keys = Object.keys(myObj);
  const ans = {
    valid: "valid",
    invalid: "invalid",
  };
  const check = () => {};
}

module.exports = isValid;
