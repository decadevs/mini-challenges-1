/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {

  const symbol = "IVXLCDM";
  const value = [1, 5, 10, 50, 100, 500, 1000];

  let sum = 0;

  while (roman) {
    if (roman[1] && symbol.indexOf(roman[0]) < symbol.indexOf(roman[1])) {

      sum += (value[symbol.indexOf(roman[1])] - value[symbol.indexOf(roman[0])]);
      roman = roman.substring(2, roman.length);

    } else {

      sum += value[symbol.indexOf(roman[0])];
      roman = roman.substring(1, roman.length);
    }
  }

  return sum;
}

module.exports = romanToDecimal;
