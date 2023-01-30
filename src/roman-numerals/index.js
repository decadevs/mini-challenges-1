/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
let result = 0;

let romanRep = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

for (var i = 0; i < roman.length; i++) {
  let numAt = romanRep[roman[i]];
  let numAfter = romanRep[roman[i + 1]];

  if (numAt < numAfter) {
    result += numAfter - numAt;
    i++;
  } else {
    result += numAt;
  }
}
  return result;
}

module.exports = romanToDecimal;
