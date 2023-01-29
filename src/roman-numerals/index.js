/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */

function romanToDecimal(roman) {
  let decimal = 0 // Variable for storing the output
  const romanObj = { // Object containing key-value pair for the roman numerals and their equivalent decimal values
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
  for (let index = 0; index < roman.length; index++) { // Loop through the {roman} string
    if (romanObj.hasOwnProperty(roman[index])) { // Check if the {romanObj} object contains the character in the {roman} string
      decimal += romanObj[roman[index]] // if true, add the value equivalent of the character to the decimal variable 
      if (romanObj[roman[index]] < romanObj[roman[index + 1]]) { // Check if any of the decimal values is less than its corresponding decimal value when its index is increased by one
        decimal -= romanObj[roman[index]] * 2 // Multiply that value by two and subtract the product from the {decimal} variable
      }
    }
  }
  return decimal // return the {decimal variable}
}

console.log(romanToDecimal("MMMDCCXXIV"))
console.log(romanToDecimal("MMCDXLVIII"))
console.log(romanToDecimal("MMMCMXCIX"))
console.log(romanToDecimal("MDXC"))
console.log(romanToDecimal("CMXCI"))

module.exports = romanToDecimal;
