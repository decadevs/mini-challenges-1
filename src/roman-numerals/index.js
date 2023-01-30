/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    const romanValues = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    let decimal = 0;
    for (let i = 0; i < roman.length; i++) {
        if (romanValues[roman[i]] < romanValues[roman[i + 1]]) {
            decimal -= romanValues[roman[i]];
        } else {
            decimal += romanValues[roman[i]];
        }
    }
    return decimal;
}


module.exports = romanToDecimal;
