/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
  const romanNew = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };
  let sum = 0;
  for (let i = 0; i < roman.length; i++) {
    let first = roman[i];
    let second = roman[i + 1];
    // 'IX' = 1 < 10 => 10 - 1
    if (romanNew[first] < romanNew[second]) {
      sum += romanNew[second] - romanNew[first];
      i++;
    } else {
      // 'XI' = 10 > 1 => 10 + 1
      sum += romanNew[first];
    }
  }
  return sum;
}
module.exports = romanToDecimal;
