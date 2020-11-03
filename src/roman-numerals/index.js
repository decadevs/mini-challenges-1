/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
  let numeralArray = []; // Array to hold the numeral equivalent of the roman literal
  let lastValue = 0; // a control value to be used to check the magnitude of the current value
  let basicRomanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = roman.length - 1; i >= 0; i--) {
    if (roman[i] in basicRomanValues) {
      /*
       * check if the char in the roman str is in basicRomanValues and if true,
       * assign the assosiated value of the char key in basicRomanValues to currentValue.
       * compare the currentValue to the lastValue and if it is larger,
       * push the real number and if it is smaller,
       * push the negative of the number.
       */
      let currentValue = basicRomanValues[roman[i]];
      if (currentValue < lastValue) {
        numeralArray.push(-currentValue);
      } else numeralArray.push(currentValue);

      lastValue = currentValue; // assign the currentValue to the lastValue before the next iteration
    } else return "invalid"; // return 'invalid' if the roman str contains a char not in basicRomanValues
  }
  return numeralArray.reduce((a, b) => a + b, 0); // return the sum of array after all iteration
}

module.exports = romanToDecimal;
