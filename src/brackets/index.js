/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */

   function isValid(text){

      if(text.length %2 !== 0){
         return "invalid";
      }

      while(text.includes('{}') || text.includes('[]') || text.includes('()')){
         text = text.replace('{}','').replace('[]', '').replace('()','');
      }
      return text.length > 0 ? "invalid" : "valid";

      
}
      
console.log(isValid("{}{}{}{}{}"));


module.exports = isValid;
