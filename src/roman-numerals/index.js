/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
  // roman = roman.split(''); roman 
  const romanToNum = {
    "M": 1000,
    "CM": 900,
    "D": 500,
    "CD": 400,
    "C": 100,
    "XC": 90,
    "L": 50,
    "XL": 40,
    "X": 10,
    "IX": 9,
    "V": 5,
    "IV": 4,
    "I": 1,
  }
  
  let sum = 0;
  let romArr = roman.split("");
  let curr, next;

  for (let i = 0; i < romArr.length; i++) {
    curr = romanToNum[romArr[i]];
    next = romanToNum[romArr[i + 1]];

    if (curr < next) {
      next
      sum -= curr;
      sum
    } else {
      sum += curr;
      sum
    }
  }
  return sum
}

module.exports = romanToDecimal;
