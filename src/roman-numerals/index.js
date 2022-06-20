/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {

  let romanfigure = roman.toLowerCase();
  function getBasicRomanFigure(romanfigure) {
    switch (romanfigure) {
      case "i":
        return 1;
        break;
      case "v":
        return 5;
        break;
      case "x":
        return 10;
        break;
      case "l":
        return 50;
        break;
      case "c":
        return 100;
        break;
      case "d":
        return 500;
        break;
      case "m":
        return 1000;
        break;
      default:
        return -1;
    }
  }
  // Initialize output
  let output = 0;
  // get the index of the string of the roman numeral
  // get the corresponding number of the roman numeral from the getBasicRomanValue function
  let i = 0;
  // while loop iterate through the string of rkoman block get the return value
  // loop must not exceed the length of the string of roman figure
  while (i < romanfigure.length) {
    let first = getBasicRomanFigure(romanfigure.charAt(i));
    let next = getBasicRomanFigure(romanfigure.charAt(i + 1));

    if (first < next) {
      output += next - first;
      i += 2;
    }
    // block Value of current symbol is greater or equalto the next symbol
    else {
      output += first;
      i++;
    }
    // output += first;
  }
  return output;
}

module.exports = romanToDecimal;
