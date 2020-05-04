/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */

const romanNumerals = { I: 1, II: 2, III: 3, IV: 4, V: 5, VI: 6, VII: 7,VIII: 8,
                       IX: 9, X: 10, XL: 40, L: 50, XC: 90, C: 100, CD: 400,
                        D: 500, CM: 900, M: 1000,
                      };
function romanToDecimal(roman) {
  const arr = [];

  var previous = 0;
  var next = 1;
  for (let i = 0; i < roman.length; i++) {
    const firstData = roman[previous];
    var secondData = "";
    roman[next] ? (secondData += roman[next]) : "";
    const result = firstData + secondData;
    const RomanOne = romanNumerals[firstData];
    const RomanTwo = romanNumerals[result];

    if (RomanTwo) {
      arr.push(RomanTwo);
      previous++;
      next++;
    } else {
      if (RomanOne) {
        arr.push(RomanOne);
      }
    }
    previous++;
    next++;
  }
  return arr.reduce((x, y) => x + y);
}

module.exports = romanToDecimal;
