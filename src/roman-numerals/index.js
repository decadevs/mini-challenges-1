/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
  let translation = {"I":1, "V":5, "X":10, "L":50, "C":100, "D":500, "M":1000};
  let sum = 0;
  let newRoman = roman.split("");
  for (let i = 0; i < newRoman.length; i++) {
    let presentValue = translation[newRoman[i]];
    let nextValue = translation[newRoman[i + 1]];
    if (presentValue < nextValue) {
      sum -= (presentValue);
    } else {
      sum += (presentValue);
    }
  }
  return Number(sum);
}

module.exports = romanToDecimal;
