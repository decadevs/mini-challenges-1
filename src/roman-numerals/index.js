/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */

function romanToDecimal(roman) {
  let stack = [];
  let total = 0;

  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = 0; i < roman.length; i++) {
    const currentSymbol = roman[i];
    const currentValue = romanNumerals[currentSymbol];
    const nextValue = romanNumerals[roman[i + 1]];

    if (nextValue && currentValue < nextValue) {
      total -= currentValue;
    } else {
      total += currentValue;
    }
  }

  return total;
}


module.exports = romanToDecimal;
