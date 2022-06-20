/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
const romanNumerals = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
}

function romanToDecimal(roman) {
  let decimal = 0;
  romanLength = roman.length
      for (i=0; i<romanLength; i++) {
       let presentValue = roman[i];
       let nextValue = roman[i+1];


        if (romanNumerals[presentValue] >= romanNumerals[nextValue]) {
          decimal = decimal + romanNumerals[presentValue];
        }else if (romanNumerals[presentValue] < romanNumerals[nextValue]){
        decimal = decimal - romanNumerals[presentValue];
      }else if(romanNumerals[presentValue] && (!nextValue)){
        decimal = decimal + romanNumerals[presentValue]
      }
    }
    return decimal
  }




module.exports = romanToDecimal;
