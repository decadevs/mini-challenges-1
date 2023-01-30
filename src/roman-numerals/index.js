/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
  // list the constant roman symbols, and assign them to a variable
  const romanSymbols = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
  let answer = 0;
  for (let i = 0; i < roman.length; i++){
    const now = romanSymbols[roman[i]];
    const later = romanSymbols[roman[i + 1]];
    if (now < later){
      answer += later - now;
      i++;
    } else answer += now
  }
  return answer
}

module.exports = romanToDecimal;




