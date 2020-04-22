/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
  let final = 0;
  let cur;
  let curVal;
  let next;
  let nextVal;
  const newObject = new Object();
  newObject.I = 1;
  newObject.V = 5;
  newObject.X = 10;
  newObject.L = 50;
  newObject.C = 100;
  newObject.D = 500;
  newObject.M = 1000;
  let aa = roman.split("");
  for (let i = 0; i < aa.length; i++) {
    cur = aa[i];
    curVal = newObject[cur];

    next = aa[i + 1];
    nextVal = newObject[next];

    if (curVal < nextVal) {
      final -= curVal;
    } else {
      final += curVal;
    }
  }
  return final;
}

module.exports = romanToDecimal;
