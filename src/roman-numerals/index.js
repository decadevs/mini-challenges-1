/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */

    function romanToDecimal(roman) {
        let num = 0;
        for (let i = 0; i < roman.length; i++) {
          if (roman[i] === "M") {
            num += 1000;
          } else if (roman[i] === "C" && roman[i + 1] === "M") {
            num += 900;
            i++;
          } else if (roman[i] === "C" && roman[i + 1] === "D") {
            num += 400;
            i++;
          } else if (roman[i] === "D") {
            num += 500;
          } else if (roman[i] === "C") {
            num += 100;
          } else if (roman[i] === "X" && roman[i + 1] === "C") {
            num += 90;
            i++;
          } else if (roman[i] === "X" && roman[i + 1] === "L") {
            num += 40;
            i++;
          } else if (roman[i] === "L") {
            num += 50;
          } else if (roman[i] === "X") {
            num += 10;
          } else if (roman[i] === "I" && roman[i + 1] === "X") {
            num += 9;
            i++;
          } else if (roman[i] === "I" && roman[i + 1] === "V") {
            num += 4;
            i++;
          } else if (roman[i] === "V") {
            num += 5;
          } else if (roman[i] === "I") {
            num += 1;
          }
        }
        return num;
      }
      

module.exports = romanToDecimal;
