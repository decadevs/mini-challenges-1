/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
  function isValid(str) {
    str = str.split("");
    let valid = "valid";
    let newArr = [];

    for (let i = 0; i < str.length; i++) {
      let char = str[i];

      switch (char) {
        case "(":
        case "{":
        case "[":
          newArr.push(char);
          break;
        case ")":
        case "}":
        case "]":
          if (newArr.length == 0) {
            valid = "invalid";
          } else {
            let last = newArr.pop();
            if (
              (char == ")" && last != "(") ||
              (char == "}" && last != "{") ||
              (char == "]" && last != "[")
            ) {
              valid = "invalid";
            }
          }
          break;
        default:
          console.log(char);
      }
    }
    console.log(newArr);
    if (newArr.length > 0) {
      valid = "invalid";
    }

    return valid;
  }

module.exports = isValid;
