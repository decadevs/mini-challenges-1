/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
  const conversion = {
    "M": 1000,
    "D": 500,
    "C": 100,
    "L": 50,
    "X": 10,
    "V": 5,
    "I": 1
  }

  let array = roman.split("")
  let total = 0
  for(let i = 0; i < array.length; i++) {
    total += conversion[array[i]]
  }
  return total
}
console.log(romanToDecimal("IXXX"))

module.exports = romanToDecimal;
