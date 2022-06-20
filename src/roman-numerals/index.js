/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
  //create object to hold roman numeral and its corresponding decimal value
  const CONVERSION = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  //create a variable and set value to 0 to keep track
  let decimal = 0;
  //loop through roman symbols and add its corresponding value to the value of the variable
  //keep track of the current index and next index to handle cases where symbols are ordered smallest to largest
  //if it is, substract corresponding value from the value of the variable
  for (let i = 0, n = roman.length; i < n; i++){
      let currentIndex = roman[i];
      let nextIndex = roman[i + 1];
      if (CONVERSION[currentIndex] < CONVERSION[nextIndex]){
          decimal -= CONVERSION[currentIndex];
      }
      else {
          decimal += CONVERSION[currentIndex];
      }
  }
  return decimal;
}

module.exports = romanToDecimal;
