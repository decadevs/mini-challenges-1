/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
  const upperCaseIn = [...roman.toUpperCase()];
  const symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let holder = [];
  let output = 0;

  upperCaseIn.forEach((el) => {
    holder.push(symbols[el]);
  });

  holder.forEach((el, i) => {
    if (el >= holder[i + 1] && i < holder.length - 1) output += holder[i];
    if (el < holder[i + 1] && i < holder.length - 1) output -= holder[i];
    if (i === holder.length - 1) output += holder[i];
  });

  return output;
}

module.exports = romanToDecimal;

// const test = numeralsToDecimal("MMCDXLVIII");
