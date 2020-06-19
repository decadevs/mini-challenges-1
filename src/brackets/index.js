/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */

function isValid(str) {
   const openingBraces = ["(", "[", "{", "<"];
   const closingBraces = [")", "]", "}", ">"];
   let open = [];

   if (closingBraces.includes(str[0]) || str.length%2 != 0) {
      return "invalid";
   }

   for (let i = 0; i < str.length; i++) {
      if (openingBraces.includes(str[i])) {
         open.push(str[i])
         
      } else if (closingBraces.includes(str[i])) {
         if (closingBraces.indexOf(str[i]) === openingBraces.indexOf(open[open.length - 1])) {
            open.pop(open[open.length - 1]);
         }
      }
   }

   return open.length !== 0 ? "invalid" : "valid"
}

module.exports = isValid;
