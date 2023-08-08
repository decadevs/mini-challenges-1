/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    const values = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000,
    }
    let result = 0;
    let previousChar = 0;
    for (let i = roman.length -1; i >= 0; i--){
        const currentChar = values[roman[i]];
        if (currentChar < previousChar){
            result -= currentChar;
        } else {
            result += currentChar;
        }
        previousChar = currentChar
    }
    return result

}
  
module.exports = romanToDecimal;
