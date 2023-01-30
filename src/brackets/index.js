/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
  if (str.length % 2 !== 0) {
    return "invalid";
  }
  let openBraces = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
      openBraces.push(str[i]);
    } else {
      let braces = openBraces.pop();
      if (
        !(
          (str[i] === ")" && braces === "(") ||
          (str[i] === "}" && braces === "{") ||
          (str[i] === "]" && braces === "[")
        )
      ) {
        return "invalid";
      }
    }
  }
  if (openBraces.length === 0) {
    return "valid";
  } else {
    return "invalid";
  }
}

console.log(isValid("(}"));
console.log(isValid("{[()[]]()}()"));
console.log(isValid("{{{(())}}[[()]]}"));
console.log(isValid("[{()}({[]})(){}[]]"));
console.log(isValid("(){}[](([][]){})"));
console.log(isValid("{{[][()]}{[][()]}{[][()]}}"));
console.log(isValid("({()}[()]}"));
console.log(isValid("[](){{{}}"));
console.log(isValid("{{{{{{{{{{{{}}}}}}}}}}}()[]"));
console.log(isValid("}{{{{}}}}{([])(((()))){"));

module.exports = isValid;
