/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    const hash = {'I' : 1,'V' : 5,'X' : 10,'L' : 50,'C' : 100,'D' : 500,'M' : 1000};
    
    let array = roman.split("");
    let number = 0;

    for (let i = 0; i < array.length; i++) {
        let currentValue = hash[array[i]];
        let nextValue = hash[array[i + 1]];
        if (currentValue < nextValue) {
            number -= currentValue;
        } else {
            number += currentValue;
        }
    }
    return number
}

module.exports = romanToDecimal;
