/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
// this object holds all the symbols and their number equivalence
const romanConversions = {
  "I": 1, "V": 5,
  "X": 10, "L": 50,
  "C": 100, "D": 500, "M": 1000
}

function romanToDecimal(roman) {
  // split the input roman numerals to give an array of symbols
  const arrayInput = roman.split('');

  // declare empty variables and initiating the output with zero
  var output = 0,
    currentValue, currentConvertedValue,
    nextValue, nextConvertedValue;

  for (let i = 0; i < arrayInput.length; i++) {

    currentValue = arrayInput[i];

    // return the equivalent value of the roman numeral and assigning it to a variable
    currentConvertedValue = romanConversions[currentValue];

    // check the next roman numeral in the array and assigning it to a variable
    nextValue = arrayInput[i + 1];

    // return the equivalent value of the roman numeral and assigning it to a variable
    // useful for the conditional statement in the loop
    nextConvertedValue = romanConversions[nextValue];

    //Check if the current value is small than the next value e.g IX, XL, XC, CM, 
    if (currentConvertedValue < nextConvertedValue) {

      // if the condition is satisfied
      // subtract the current converted value to the original output value
      output -= currentConvertedValue

    } else {

      // if the condition is satisfied
      // add the current converted value to the original output value
      output += currentConvertedValue

    }
  }

  return output;

}

module.exports = romanToDecimal;
