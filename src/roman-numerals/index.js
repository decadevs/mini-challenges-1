/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
  let equivalent = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  let decimalEquivalent = 0;
  for (let i = 0; i < roman.length; i++) {

    if (equivalent[roman[i]] < equivalent[roman[i + 1]]) {
      decimalEquivalent -= equivalent[roman[i]];
    }
    else if (equivalent[roman[i]] >= equivalent[roman[i + 1]]) {
      decimalEquivalent += equivalent[roman[i]];
    }
  }
  decimalEquivalent += equivalent[roman[roman.length - 1]];
  return decimalEquivalent;
}

module.exports = romanToDecimal;
