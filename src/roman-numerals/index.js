/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
  let data = {
    M : 1000,
    D : 500,
    C : 100,
    L : 50,
    X : 10,
    V : 5,
    I : 1
  }

  let total = 0;

  for (let i = 0; i < roman.length; i++) {
    if (data[roman[i]] < data[roman[i + 1]]) {
      total += roman[i + 1] - roman[i];
      i++;
    } else {
      total += roman[i];
    }
  }
  return total;
}

module.exports = romanToDecimal;
