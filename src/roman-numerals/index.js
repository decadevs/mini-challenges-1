/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */

const romanHash = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToDecimal(str) {
  let total = 0;
  for (let j = 0; j < str.length; j++) {
    if (str[j] === "I" && str[j + 1] === "V") {
      total += 4;
      j++;
    } else if (str[j] === "I" && str[j + 1] === "X") {
      total += 9;
      j++;
    } else if (str[j] === "X" && str[j + 1] === "L") {
      total += 40;
      j++;
    } else if (str[j] === "X" && str[j + 1] === "C") {
      total += 90;
      j++;
    } else if (str[j] === "C" && str[j + 1] === "D") {
      total += 400;
      j++;
    } else if (str[j] === "C" && str[j + 1] === "M") {
      total += 900;
      j++;
    } else {
      total += romanHash[str[j]];
    }
  }
  return total;
}

console.log(romanToDecimal('CL'));


module.exports = romanToDecimal;
