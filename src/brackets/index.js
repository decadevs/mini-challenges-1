/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
//assigning all bracket into a variable brackets and assign an empty array to newBracket
    let bracket = "[]{}()"
    let newBracket =[]
//loop through str using the for-of loop
    for (let item of str){
      let bracketIndex = bracket.indexOf(item)
// edge case
      if (bracketIndex === -1){
        continue
// push even indexes into new bracket
      }if(bracketIndex%2 === 0){
        newBracket.push(bracketIndex+1)
      }else{
        if(newBracket.pop() !== bracketIndex){
          return "invalid"
        }
      }
    }return  newBracket.length === 0?"valid":"invalid";

}

module.exports = isValid;
