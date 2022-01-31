/**
 * Implement the solution in this function
 *
 * @param {romaning} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
 function romanToDecimal(roman) {
    let romanToNum = {
        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1
    }

    let num = 0

    for(let i = 0; i < roman.length; i++) {
        if(romanToNum[roman[i]] < romanToNum[roman[i + 1]]) {
            num -= romanToNum[roman[i]]
        } else {
            num += romanToNum[roman[i]]
        }
    }
    return num
}

module.exports = romanToDecimal;
