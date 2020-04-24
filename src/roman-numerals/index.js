/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
  let decimalNumber = 0;

  let romanFigures = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };

  // Checking and removing the double letters after adding up their roman values to output
  if (roman.includes("IV")) {
    decimalNumber += 4;
    roman = roman.replace("IV", "");
  }

  if (roman.includes("IX")) {
    decimalNumber += 9;
    roman = roman.replace("IX", "");
  }

  if (roman.includes("XL")) {
    decimalNumber += 40;
    roman = roman.replace("XL", "");
  }

  if (roman.includes("XC")) {
    decimalNumber += 90;
    roman = roman.replace("XC", "");
  }

  if (roman.includes("CD")) {
    decimalNumber += 400;
    roman = roman.replace("CD", "");
  }

  if (roman.includes("CM")) {
    decimalNumber += 900;
    roman = roman.replace("CM", "");
  }

  // Updating the values of the rest
  for (let letter of roman) {
    decimalNumber += romanFigures[letter];
  }

  return decimalNumber;
}

module.exports = romanToDecimal;
