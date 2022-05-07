/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    let singleRomanNumerals = {
        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1
    };
    let doubleRomanNumerals = {
        CM: 900,
        CD: 400,
        XC: 90,
        XL: 40,
        IX: 9,
        IV: 4,
    };

    var decimal = 0;

    for (let r = 0; r < roman.length; r++) {
        if (Object.keys(doubleRomanNumerals).includes(`${roman[r] + roman[r + 1]}`)) {
            decimal += doubleRomanNumerals[`${roman[r] + roman[r + 1]}`];
            r += 1;
            continue;
        } else {
            decimal += singleRomanNumerals[roman[r]];
        }
    }


    return decimal;
}
console.log(romanToDecimal("CLXVIII"));
module.exports = romanToDecimal;
