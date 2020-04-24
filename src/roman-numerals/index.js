/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
  let collection = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  }
  let decimal = 0; let cumm;
  for(let i = 0; i<roman.length; i++){
      cumm = collection[roman[i]];
      if(roman[i] === 'V' && roman[i-1] === 'I' ) {
        cumm = collection[roman[i]] - 2*collection[roman[i-1]];
      }
      if(roman[i] === 'X' && roman[i-1] === 'I') {
        cumm = collection[roman[i]] - 2*collection[roman[i-1]];
      }

    if(roman[i] === 'L' && roman[i-1] === 'X' ) {
      cumm = collection[roman[i]] - 2*collection[roman[i-1]];
    }
    if(roman[i] === 'C' && roman[i-1] === 'X') {
      cumm = collection[roman[i]] - 2*collection[roman[i-1]];
    }
    if(roman[i] === 'D' && roman[i-1] === 'X') {
      cumm = collection[roman[i]] - 2*collection[roman[i-1]];
    }
    if(roman[i] === 'M' && roman[i-1] === 'X') {
      cumm = collection[roman[i]] - 2*collection[roman[i-1]];
    }

    if(roman[i] === 'D' && roman[i-1] === 'C' ) {
      cumm = collection[roman[i]] - 2*collection[roman[i-1]];
    }
    if(roman[i] === 'M' && roman[i-1] === 'C') {
      cumm = collection[roman[i]] - 2*collection[roman[i-1]];
    }

    decimal +=cumm;
  }
  return decimal;
}


module.exports = romanToDecimal;
