/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    //create a roman numeral object based on the rules
  //iterate through the string of roman numeral
  //create a conditional statement that will either add or substract the object corresponding to the elements of the str depending on the position in the string
let romanNumerals = {
  I: 1,
  V: 5,
  X: 10,
  // XL: 40,
  L: 50,
  // XC: 90,
  C: 100,
  // CD: 400,
  D: 500,
  // CM: 900,
  M: 1000
}
let total = 0

// for (let roman in romanNumerals){
//   console.log(romanNumerals[roman])
//   }

for (let i = 0; i < roman.length; i++){
  if (romanNumerals[roman[i]] < romanNumerals[roman[i + 1]]){
   total = total - romanNumerals[roman[i]]
  } else {
    total += romanNumerals[roman[i]]
  }
  //console.log(romanNumerals[str[i]], str[i] )
}
 return total

}

module.exports = romanToDecimal;
