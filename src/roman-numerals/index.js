/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
const romanNumeral = {
    'I': 1,
    'V': 5,       
    'X': 10,       
    'L': 50,
    'C': 100,        
    'D': 500,       
    'M': 1000
}

function romanToDecimal(roman) {
   let array = roman.split('')
   let total = 0
   let currentValue
   let nextValue

   for(let i = 0; i < array.length; i++) {
       currentValue = romanNumeral[array[i]]
       nextValue = romanNumeral[array[i+1]]

       if(currentValue < nextValue) {
           total -= currentValue
       } else {
           total += currentValue
       }
   }
    return total;
}

module.exports = romanToDecimal;
