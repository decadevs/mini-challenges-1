/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */

function romanToDecimal(roman) {
  const romanAll = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let result = 0;

  for (let index = 0; index < roman.length; index++) {
    const currentRoman = romanAll[roman[index]];
    const nextRoman = romanAll[roman[index + 1]];
    if (currentRoman < nextRoman) {
      result += nextRoman - currentRoman;
      index++;
    } else {
      result += currentRoman;
    }
  }
  return result;
}

module.exports = romanToDecimal;
