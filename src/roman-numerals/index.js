/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
  const numerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let decimal = 0;

  //  loop through roman
  for (let index = 0; index < roman.length; index++) {
    //   check if the next roman value is greater than current value

    if (numerals[roman[index]] < numerals[roman[index + 1]]) {
      //   if true, subtract current value from next roman value and then add result to decimal
      decimal += numerals[roman[index + 1]] - numerals[roman[index]];
      //   skip next roman value and then continue cycle
      index++;
    } else {
      //   if false, add current value to decimal
      decimal += numerals[roman[index]];
    }
  }
  return decimal;
}

module.exports = romanToDecimal;
