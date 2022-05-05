/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    // Create an object matching each key with the appropriate value
    const romanNumerals = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }

    let result = ""

    // Loop through each key in the object
    // Update the result while subtracting value from roman
    for (let key in romanNumerals) {
        while (roman >= romanNumerals[key]) {
            result += key
            roman -= romanNumerals[key]
        }
    }

    return result
}

module.exports = romanToDecimal;
