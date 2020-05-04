/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    let number = 0;
    for (let i = 0; i < roman.length; i++){
        if (roman[i] === 'M') {
            number += 1000;
        } else if (roman[i] === 'D') {
            number += 500;
        } else if (roman[i] === 'C'){
            if (roman[i + 1] === 'D' || roman[i + 1]=== 'M') {
                number -= 100;
            } else {
                number += 100;
            }
        } else if (roman[i] === 'L'){
            number += 50;
        } else if (roman[i] === 'X'){
            if (roman[i + 1] === 'L' || roman[i + 1] === 'C') {
                number -= 10;
            } else {
                number += 10;
            }
        } else if (roman[i] === 'V'){
            number += 5;
        } else if (roman[i] === 'I'){
            if (roman[i + 1] === 'X' || roman[i + 1] === 'V') {
                number -= 1;
            } else {
                number += 1;
            }
        }
    }
    return number;
}

module.exports = romanToDecimal;