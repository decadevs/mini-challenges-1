/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
  // Set roman numeral variable to its corresponding numbers with object
  const romanNum = {
    I : 1,
    V : 5,
    X : 10,
    L : 50,
    C : 100,
    D : 500,
    M : 1000
  };

  // Set sum of roman numerals to decimal to 0
  let sum = 0;

  // Loop through the roman numeral in the array object
  for (let i = 0; i < roman.length; i++) {
    /// Assign the value of the corresponding decimal numbers
    let firstRom = romanNum[roman.charAt(i)];
    // Assign the next value of the corresponding decimal number
    let secondRom = romanNum[roman.charAt(i+1)];
    // A conditional statement for the next roman numeral if it does exist
    if (secondRom) {
      // If the next does exist, and is less than firstRom
      if (secondRom <= firstRom) {
        // Then add to sum
        sum = sum + firstRom;
      } else {
        // If the second roman numeral is greater than the first roman numeral, then the difference should be add to sum
        sum = sum + (secondRom - firstRom);
        // Then it should keep iterating
        i++;
      }
    }
    // If the first roman numeral is the last
    else {
      // Then add to sum
      sum = sum + firstRom;
    }
  }

  // Return sum
  return sum;
}

module.exports = romanToDecimal;
