/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
  let stack = [];
  let output = "";
  str.split("").forEach((el) => {
    if (el === "(" || el === "[" || el === "{") {
      stack.push(el);
    }

    if (stack.length === 0) output = "invalid";
    if (stack[stack.length - 1] === "(" && el === ")") stack.pop();
    else if (stack[stack.length - 1] === "[" && el === "]") stack.pop();
    else if (stack[stack.length - 1] === "{" && el === "}") stack.pop();
    // else output = "invalid";
  });

  if (output === "invalid") return output;
  return stack.length === 0 ? "valid" : "invalid";
}
console.log(isValid("(())"));
module.exports = isValid;
