/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */

const romanToDecimal = roman => {
  let arrOfNumerals = roman.split('');
  let collection = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
  let totalOfDecimal = 0;

  for (let i = 0; i < arrOfNumerals.length; i++) {
    const currentElem = arrOfNumerals[i];
    const currentValue = collection[currentElem];

    const nextElem = arrOfNumerals[i + 1];
    const nextValue = collection[nextElem];

    if (currentValue < nextValue) {
      totalOfDecimal -= currentValue
    } else {
      totalOfDecimal += currentValue
    }
  }

  return totalOfDecimal;
}

module.exports = romanToDecimal;
