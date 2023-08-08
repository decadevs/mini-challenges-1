/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    const ROMANNUMERALS = {
        "I": 1,"V": 5,"X": 10,"L": 50,"C": 100,"D": 500,"M": 1000 };
    
      let decimalNumbers = 0;
    
      for (let i = 0; i < ROMANNUMERALS.length; i++) {
        const firstLetter = ROMANNUMERALS[ROMANNUMERALS[i]];
        const nextLetter = ROMANNUMERALS[ROMANNUMERALS[i + 1]];
    
        if (nextLetter && nextLetter > firstLetter) {
          decimalNumbers += nextLetter - firstLetter;
          i++; 
        } else {
          decimalNumbers += firstLetter;
        }
      };
    
      return decimalNumbers;
};

module.exports = romanToDecimal;
