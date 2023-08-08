/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */


function romanToDecimal(roman) {

  let numeral = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
  };
  let result = 0
  for(let i = 0; i < roman.length; i++) {
      let curSym = numeral[roman[i]]
      let nextSym = numeral[roman[i + 1]]

      if(nextSym && nextSym > curSym){
          result += nextSym  - curSym
          i++
      } else {
          result += curSym
      };
  };
  return result
};

module.exports = romanToDecimal;






