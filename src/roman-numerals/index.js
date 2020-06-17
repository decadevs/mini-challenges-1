/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
  // create and object containig key:value pairs of the roman numerals to their values
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
  // create and array of the roman numeral string passed into the function
  let romArr = roman.split("");
  let curr, next;

  for (let i = 0; i < romArr.length; i++) {
    // set current to the arr[i] and next to the step increment on i
    curr = romanToNum[romArr[i]];
    next = romanToNum[romArr[i + 1]];

    // subtract current from sum if it is lesser than the next array. Otherwise, add current to sum
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
