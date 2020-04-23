/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
  let dataObj = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let romanToDecimal = [];
  let sum = 0;

  // Previous Number in the decimal array
  let j = 0;

  // Convert all roman elements to decimal elements
  Array.from(roman).forEach((element) => {
    romanToDecimal.push(dataObj[element]);
  });

  for (let i = romanToDecimal.length; i >= 0; i--) {
    // Check if previous number is lesser than current number
    if (j <= romanToDecimal[i]) {
      j = romanToDecimal[i];
      sum = sum + romanToDecimal[i];
    } else if (j > romanToDecimal[i]) {
      j = romanToDecimal[i];
      sum = sum - romanToDecimal[i];
    }
  }
  return sum;
}

module.exports = romanToDecimal;
