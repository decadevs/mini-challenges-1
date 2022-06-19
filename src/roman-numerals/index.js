/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */

function romanToDecimal(roman) {
  const romanNumeralMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let decimal = 0;
  let previousValue = 0;
  let repeatCount = 0;

  for (let i = roman.length - 1; i >= 0; i--) {
    const currentValue = romanNumeralMap[roman[i]];

    if (currentValue < previousValue) {
      repeatCount++;
    } else {
      repeatCount = 0;
    }

    previousValue = currentValue;

    if (repeatCount === 0) {
      decimal += currentValue;
    } else if (repeatCount === 1) {
      decimal += currentValue - currentValue * 2;
    } else if (repeatCount === 2) {
      decimal += currentValue - currentValue * 3;
    }
  }

  return decimal;
}

module.exports = romanToDecimal;
