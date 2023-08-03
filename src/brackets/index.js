/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    let bracket = [];
    let opening = '({[';
    let closing = ')}]';
    let matching = {
      ')': '(',
      '}': '{',
      ']': '[',
    };
  
for(let i =0; i <str.length; i++) { 
      if (opening.includes(str[i])) {
        bracket.push(str[i]);
      } else if (closing.includes(str[i])) {
        const lastBracket = bracket.pop();
        if (matching[str[i]] !== lastBracket) {
          return 'invalid';
        }
      }
    }
  
    return bracket.length === 0 ? 'valid' : 'invalid';
}

module.exports = isValid;
