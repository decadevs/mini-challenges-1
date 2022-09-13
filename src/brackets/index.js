/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
  let lengthOfString = str.length
  // Test only strings with even length
  if ((lengthOfString % 2) == 0) {
    for (let i = 0; i <= lengthOfString - 1; i++) {
      let j = lengthOfString - i;
      for (j; j >= 1; j - 2) {
        if ((str[i] == '{' && str[j] == '}') || (str[i] == '[' && str[j] == ']') || (str[i] == '(' && str[j] == ')')) {
          return 'valid';
        } else if ((str[i] == '{' && str[i + 1] == '}') || (str[i] == '[' && str[i + 1] == ']') || (str[i] == '(' && str[i + 1] == ')')) {
          return 'valid';
        } else if ((str[i] == '[' || str[i] == '(' || str[i] == '{') &&
          (str[j] == ']' || str[j] == ')' || str[j] == "}") && (((str.indexOf(str[j]) - str.indexOf(str[i])) % 3 == 0))) {
          console.log(i);
          return 'valid';
        } else {
          return 'invalid';
        }
      }
    }
  }
  return 'invalid';
}
let str = "(())";
console.log(isValid(str))


module.exports = isValid;
