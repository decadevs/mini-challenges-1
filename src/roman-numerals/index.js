/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
 const values = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
}
  let sum = 0;

  for (let i = 0; i < roman.length; i++) {
    const num  = values[roman[i]];
    const number  = values[roman[i + 1]];
    if(num < number) {
      sum += number - num;
      i++;
    } else sum += num;


  }

return sum;
}

module.exports = romanToDecimal;
