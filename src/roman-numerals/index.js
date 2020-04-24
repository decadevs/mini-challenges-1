/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
  let rom_int = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };
  let result = 0;
  let values = roman
    .toUpperCase()
    .split("")
    .map((el) => rom_int[el]);

  for (let index = 0; index < values.length; index++) {
    if (values[index] < values[index + 1]) {
      result += values[index + 1] - values[index];
      index++;
    } else {
      result += values[index];
    }
  }
  return result;
}

module.exports = romanToDecimal;
