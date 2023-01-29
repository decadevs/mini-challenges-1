/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */

function isValid(str) {
  let curStr, curStr1, curStr2;
  let result;
  let count = 0;
  let all = ["()", "[]", "{}"]
  const search = (str) => {
    curStr = str.split("()").join("");
    curStr1 = curStr.split("{}").join("");
    curStr2 = curStr1.split("[]").join("");
    return curStr2;
    }
  for (let i = 0; i < str.length; i++){
  result = search(str);
  }
  if (result.length === 0) return "valid";
  if (result.includes("(]") || result.includes("(}") || result.includes("[)") || result.includes("[}") ||
  result.includes("{)") || result.includes("{]")) return "invalid";
   if (!all.includes(result[0] + result[result.length - 1])) return "invalid";
  if (result.length > 0) { 
       for (let i = 0; i < result.length; i++) {
       let bracket = result[i];
      if (bracket === "[" || bracket === "{" || bracket === "(") count++;
       if (bracket === "]" || bracket === "}" || bracket === ")") count--;
     }  
  }
  if (count === 0) return "valid";
    return "invalid";
}
module.exports = isValid;




