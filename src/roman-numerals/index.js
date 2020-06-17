/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The number equivalent.
 */
function romanTonumber(roman) {
    const romanNumeralValues = {
      'I' : 1,

      'V' : 5,

      'X' : 10,

      'L' : 50,

      'C' : 100,

      'D' : 500,

      'M' : 1000
    };
    let number = 0;
    roman = roman.toUpperCase();
    for(let index = 0; index < roman.length; index++){
      let firstLetter = roman[index];
      let nextLetter = roman[index + 1];
      if (!nextLetter) {
        number += romanNumeralValues[firstLetter];
        break;
      }
      if (romanNumeralValues[firstLetter] >= romanNumeralValues[nextLetter]) {
        number += romanNumeralValues[firstLetter];
      } else if (romanNumeralValues[firstLetter] < romanNumeralValues[nextLetter]) {
        number -= (romanNumeralValues[firstLetter]);
      }
    }
    return number;
}

module.exports = romanTonumber;
