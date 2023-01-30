/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
  var romObj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  for (let i = 0; i < roman.length; i++) {
    result += romObj[roman[i]];
    // Check the order of the characters in the string
    if ((roman[i] == "I" && roman[i + 1] == "V") || (roman[i] == "I" && roman[i + 1] == "X")) {
      result -= 2 * romObj["I"];
    }
    if ((roman[i] == "X" && roman[i + 1] == "L") || (roman[i] == "X" && roman[i + 1] == "C")) {
      result -= 2 * romObj["X"];
    }
    if ((roman[i] == "C" && roman[i + 1] == "D") || (roman[i] == "C" && roman[i + 1] == "M")) {
      result -= 2 * romObj["C"];
    }
  }
  return result;
}
module.exports = romanToDecimal;
