/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(s) {
  const stack = [];

  for (let i = 0; i < s.length; i += 1) {
    const top = stack[stack.length - 1];
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      stack.push(s[i]);
    } else if (s[i] === ')' && top === '(' && stack.length !== 0) {
      stack.pop();
    } else if (s[i] === ']' && top === '[' && stack.length !== 0) {
      stack.pop();
    } else if (s[i] === '}' && top === '{' && stack.length !== 0) {
      stack.pop();
    } else {
      return "invalid";
    }
  }

  return stack.length === 0;
}
 console.log(isValid("{){}[)"))

module.exports = isValid;
