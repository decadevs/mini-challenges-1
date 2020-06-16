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
  let current
  let currentValue
  let next
  let nextValue

  for(let i = 0; i < array.length; i++) {
    // total += conversion[array[i]]
    current = array[i]
    currentValue = conversion[current]

    next = array[i + 1]
    nextValue = conversion[[next]]

    if(currentValue >= nextValue) {
      total += (currentValue)
    } else if (currentValue < nextValue) {
      total -= (currentValue)
    } else if (currentValue && !nextValue) {
      total += currentValue
    }
  }
  return total


}
console.log(romanToDecimal("CD"))

module.exports = romanToDecimal;
