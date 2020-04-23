/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
  let arr = str.split("");
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
  if (str.length % 2 !== 0) {
    return ans.invalid;
  }
  for (let i = 0; i < arr.length; i += 1) {
    if (values.includes(arr[i])) {
      let j = i - 1;
      for (; j >= 0; j -= 1) {
        if (keys.includes(arr[j]) && myObj[arr[j]] != arr[i]) {
          return ans.invalid
        }else if (myObj[arr[j]] == arr[i]) {
          arr[j] = "7";
          arr[i] = "7";
          i = -1;
          j = -1;
        }
      }
    }
  }
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] != "7") {
      return ans.invalid;
    }
  }
  return ans.valid;
}


module.exports = isValid;
