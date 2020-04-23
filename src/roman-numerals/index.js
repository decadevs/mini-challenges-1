/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
  //get object to store roman numeral pairs
  let numerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  //create sum variable
  let sum = 0;
  //traverse through the string and make decisions
  for (let i = 0; i < roman.length; i++) {
    if (roman[i] === "I" && (roman[i + 1] === "V" || roman[i + 1] === "X")) {
      sum--;
    } else if (
      roman[i] === "X" &&
      (roman[i + 1] === "C" || roman[i + 1] === "L")
    ) {
      sum -= 10;
    } else if (
      roman[i] === "C" &&
      (roman[i + 1] === "D" || roman[i + 1] === "M")
    ) {
      sum -= 100;
    } else {
      sum += numerals[roman[i]];
    }
  }
  return sum;
}

module.exports = romanToDecimal;
