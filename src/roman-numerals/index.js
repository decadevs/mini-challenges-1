/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {

  const romanLetters = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let accumulator = 0;
  for (let i = 0; i < roman.length; i++) {
      if (roman[i] === "I" && roman[i + 1] === "V") {
        accumulator += 4;
        i++;
      } else if (roman[i] === "I" && roman[i + 1] === "X") {
        accumulator += 9;
        i++;
      } else if (roman[i] === "X" && roman[i + 1] === "L") {
        accumulator += 40;
        i++;
      } else if (roman[i] === "X" && roman[i + 1] === "C") {
        accumulator += 90;
        i++;
      } else if (roman[i] === "C" && roman[i + 1] === "D") {
        accumulator += 400;
        i++;
      } else if (roman[i] === "C" && roman[i + 1] === "M") {
        accumulator += 900;
        i++;
      } else {
        accumulator += romanLetters[roman[i]];
      }
    }
    console.log(accumulator)
    return accumulator;



}

module.exports = romanToDecimal;
