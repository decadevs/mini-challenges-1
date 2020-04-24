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
      if(checkCharBefore(roman,i)){
      cumm = collection[roman[i]] - 2*collection[roman[i-1]];
    }
    decimal +=cumm;
  }

  function checkCharBefore(str,pos){
    let curChar = str.charAt(pos);
    let prevChar = str.charAt(pos-1);
    if((curChar === 'C' || curChar === 'L' ||
   curChar === 'D' || curChar === 'M' ||
    curChar === 'V' || curChar === 'X') &&
    prevChar === 'I' ) return true;

    if((curChar === 'M' || curChar === 'L' ||
    curChar === 'C' || curChar === 'D') &&
    prevChar === 'X' ) return true;

    if((curChar === 'M' || curChar === 'D') &&
    prevChar === 'C' ) return true;

    return false;
  }

  return decimal;
}


module.exports = romanToDecimal;
