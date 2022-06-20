/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
  const stack = [];
    const characters = { ')': '(', '}': '{', ']': '['};
  for (const char of str) {
        
      if (!characters[char]){  // check if char is not among the keys in character
         stack.push(char);     // store only opening brackets
      } 
      else if (stack.pop() !== characters[char]){  
          return "invalid";
      } 
    }
    let result =""
    stack.length === 0 ? result= "valid": result="invalid"
   
    return result;

}
module.exports = isValid;  
//console.log(isValid("{{{{{{{{{{{{}}}}}}}}}}}()[]"));
console.log(isValid("[](){{{}}"));
//console.log(isValid("}{{{{}}}}{([])(((()))){"));
//console.log(isValid("({()}[()]}"));