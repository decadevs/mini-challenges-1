/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
  let convert = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};

  let arr = roman.toUpperCase().split('');
  let decimal = 0;

  for (let i = 0; i < arr.length; i++) {
    let current = convert[arr[i]];
    let next = convert[arr[i+1]];

    current < next ? decimal -= current : decimal += current;
  }
  return decimal;
}


/*console.log(romanToDecimal(`XCVIII`))
console.log(romanToDecimal(`XCIX`))
console.log(romanToDecimal(`MCMXLIV`))*/
module.exports = romanToDecimal;
