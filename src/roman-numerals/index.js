/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    let numberString = '';
    let number = 0;
    for (let i = 0; i < roman.length; i++) {
        // console.log(roman[i])
        if (roman[i] === 'M') {
            number += 1000;
        } else if (roman[i] === 'D') {
            if (roman[i + 1] === 'C') {
                number += 600;
                i++
            } else
                number += 500;
           
        } else if (roman[i] === 'C') {
            if (roman[i + 1] === 'M') {
                number += 900;
                i++;
            } else if (roman[i + 1] === 'D') {
                number += 400;
                i++;
            } else
                number += 100
        } else if (roman[i] === 'L') {
            if (roman[i + 1] === 'X') {
                number += 60;
                i++;
            } else {
                number += 50;
            }
        } else if (roman[i] === 'X') {
            if (roman[i + 1] === 'L') {
                number += 40;
                i++;
            } else if (roman[i + 1] === 'C') {
                number += 90;
                i++;
            } else
                number += 10;
        } else if (roman[i] === 'V') {
            if (roman[i + 1] === 'I') {
                number += 6;
                i++;
            } else 
                number += 5;
        } else if (roman[i] === 'I') {
            if (roman[i + 1] === 'V') {
                number += 4;
                i++;
            } else if (roman[i + 1] === 'X') {
                number += 9;
                i++;
            } else
                number += 1;
        }
    }

    return number;
}

module.exports = romanToDecimal;
