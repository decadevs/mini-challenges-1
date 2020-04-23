/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
  strArr = str.split();

  strArr.forEach(char => {
    count = 0;
    for (let i=0; i<strArr.length; i++){
      if(strArr[i] === char){
        count++;
      }
    }
  })

}

module.exports = isValid;
