/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
  let newStr, newStr1, newStr2;
  let splitResult;
  let count = 0;

  let sum = ["()", "[]", "{}"];

  const check = (str) => {
    newStr = str.split("[]").join("");
    newStr1 = newStr.split("()").join("");
    newStr2 = newStr1.split("{}").join("");
    return newStr2;
  };

  for (let i = 0; i < str.length; i++) {
    splitResult = check(str);
  }

  if (splitResult.length === 0) return "valid";

  if (
    splitResult.includes("[}") ||
    splitResult.includes("[)") ||
    splitResult.includes("(}") ||
    splitResult.includes("(]") ||
    splitResult.includes("{)") ||
    splitResult.includes("{]")
  )
    return "invalid";

  if (!sum.includes(splitResult[0] + splitResult[splitResult.length - 1]))
    return "invalid";

  if (splitResult.length > 0) {
    for (let i = 0; i < splitResult.length; i++) {
      let bracket = splitResult[i];
      if (bracket === "[" || bracket === "(" || bracket === "{") count++;
      if (bracket === "]" || bracket === ")" || bracket === "}") count--;
    }
  }

  if (count === 0) return "valid";
  return "invalid";
}

module.exports = isValid;
