/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
  let romanup = roman.toUpperCase();

  let array = [];
  let sumarry = 0;

  const romanObj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = 0; i < romanup.length; i++) {
    let first = romanObj[romanup[i]];
    let second = romanObj[romanup[i + 1]];

    if (second< first) {
      array.push(first);
    } else if (second > first) {
      array.push(second - first);
      i++;
    } else {
      array.push(first);
    }
  }
  sumarry = array.reduce((a, b) => a + b);
  return  sumarry;
}
module.exports = romanToDecimal;
