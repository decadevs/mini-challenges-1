/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
// function romanToDecimal(roman) {}

// module.exports = romanToDecimal;

var values;
values = {
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000
};

function romanToDecimal(roman) {
  var i, s1, s2, total;
  total = 0;
  i = 0;

  while (i < roman.length) {
    s1 = values[roman[i]];

    if (i + 1 < roman.length) {
      s2 = values[roman[i + 1]];

      if (s1 >= s2) {
        total = total + s1;
        i = i + 1;
      } else {
        total = total - s1;
        i = i + 1;
      }
    } else {
      total = total + s1;
      i = i + 1;
    }
  }

  return total;
}

module.exports = romanToDecimal;

console.log(romanToDecimal("MCMXCIV"));