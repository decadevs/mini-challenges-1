/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    const romanToDecimal = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
      
    let total = 0;
      
    for (let i = 0; i < roman.length; i++) {
        const currentChar = romanToDecimal[roman[i]];
        const nextChar = romanToDecimal[roman[i + 1]];
      
        total += nextChar && nextChar > currentChar ? -currentChar : currentChar;
    }
      
    return total;    
}

module.exports = romanToDecimal;
