/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    
  let result = 0
  let i = 0

  const converter = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

  while (i < roman.length) {

    let firstChar = roman[i]
    let secondChar = roman[i + 1]
    if(converter[firstChar] < converter[secondChar]) { 
     result += converter[secondChar] - converter[firstChar]
      i += 2
    } else {
      result += converter[firstChar]
      i++
    }
  }

  return result
}

console.log(romanToDecimal("MMCDXLIX"))


module.exports = romanToDecimal;
