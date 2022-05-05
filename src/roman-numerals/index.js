/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    let romanNumerals = {
        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1
    }
    let romanAlphabet = 0
    for(let i = 0; i < roman.length; i++){
        let currentRomanNumeral = roman[i];
        let nextRomanNumeral = roman[i + 1];

        if(romanNumerals[nextRomanNumeral] > romanNumerals[currentRomanNumeral]){
            romanAlphabet += romanNumerals[nextRomanNumeral] - romanNumerals[currentRomanNumeral]
            i++;
        }else {
            romanAlphabet += romanNumerals[currentRomanNumeral]
        }
    }
    return romanAlphabet
}

module.exports = romanToDecimal;
