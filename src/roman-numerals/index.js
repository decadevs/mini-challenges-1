/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */

function romanToDecimal(roman) {
  let total = 0;
  const converter = {
    I : 1,
    V : 5,
    X : 10,
    L : 50,
    C : 100,
    D : 500,
    M : 1000
  };
  for (let i=0; i < roman.length; i++) {
    let current = converter[roman.charAt(i)];
    let next = converter[roman.charAt(i+1)];
    if (next) { // If there is a next character after the current character
      if (current >= next) {
        total += current;
      } else {
        total += (next - current);
        i++;
      }
    } else { // If the current character is the last chaaracter
      total += current
    }
  }
  return total;
}


module.exports = romanToDecimal;
