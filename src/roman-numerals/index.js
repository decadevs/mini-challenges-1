/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
 function romanToDecimal(roman) {
    let editedRoman = roman.toUpperCase();
    let numerals = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let total = 0;
    editedRoman.split('').forEach((element, index) => {
      if (numerals[element] < numerals[editedRoman[index + 1]]) 
      total -= numerals[element];
      else total += numerals[element];
    });
    return total;
}
module.exports = romanToDecimal;
