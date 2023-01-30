/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
     let map = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    };
    let result = 0;
    for (let i = 0; i < roman.length; i++) {
      let current = map[roman[i] ];
      let next = map[ roman[i + 1] ] || 0;
      if (current < next) {
        result -= current;
      } else {
        result += current;
      }
    }
    return result;
}

module.exports = romanToDecimal;
