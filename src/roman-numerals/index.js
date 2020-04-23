/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
  let romanArr = roman.split("");
  let ans = 0;

  for (let i = 0; i < romanArr.length; i += 1) {
    if (romanArr[i] == "M") {
      ans += 1000;
    } else if (romanArr[i] == "C") {
      if (romanArr[i + 1] == "M") {
        ans += 900;
        i += 1;
      } else if (romanArr[i + 1] == "D") {
        ans += 400;
        i += 1;
      } else {
        ans += 100;
      }
    } else if (romanArr[i] == "D") {
      ans += 500;
    } else if (romanArr[i] == "X") {
      if (romanArr[i + 1] == "L") {
        ans += 40;
        i += 1;
      } else if (romanArr[i + 1] == "C") {
        ans += 90;
        i += 1;
      } else {
        ans += 10;
      }
    } else if (romanArr[i] == "L") {
      ans += 50;
    } else if (romanArr[i] == "I") {
      if (romanArr[i + 1] == "V") {
        ans += 4;
        i += 1;
      } else if (romanArr[i + 1] == "X") {
        ans += 9;
        i += 1;
      } else {
        ans += 1;
      }
    } else if (romanArr[i] == "V") {
      ans += 5;
    }
  }
  return ans;
}

module.exports = romanToDecimal;
