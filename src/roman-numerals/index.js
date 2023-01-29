/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    let count = 0
    let splittedString = roman.split("")
    const romanNum = {I: 1, V: 5, X:10, L:50, C:100, D:500, M:1000}
    for(let i=0; i<splittedString.length; i++){
      if(romanNum[splittedString[i]] < romanNum[splittedString[i+1]]){
        count -= romanNum[splittedString[i]]
  
        console.log(romanNum[splittedString[i]]);
      }else{
        count += romanNum[splittedString[i]]
      }
    }
    return count;
}

module.exports = romanToDecimal;
