/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    const openingBrackets = [];
 
 if (!str) return 'invalid';
 if (str.length % 2 !== 0) return 'invalid';
 
 for (let i = 0; i < str.length; i++) {
   const current = str[i];
 
   if (isOpening(current)) {
     openingBrackets.push(current);
   } else {
     const lastOpening = openingBrackets.pop();
 
     if (!isMatch(lastOpening, current)) return 'invalid';
   }
 }
 if (openingBrackets.length) {
     return 'invalid';
 } 
 return 'valid';
 
 function isOpening(bracket) {
   const store = ['[', '{', '('];
 
   if (store.includes(bracket)) return true;
   return false;
 }
 
 function isMatch(openingBracket, closingBracket) {
   const map = {
     '[': ']',
     '{': '}',
     '(': ')'
   };
 
   if (map[openingBracket] === closingBracket) return true;
   return false;
 }

}

module.exports = isValid;
