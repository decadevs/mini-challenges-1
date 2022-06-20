/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */

function trackValue(str) {
    switch (str) {
        case 'I':
            return 1;
        case 'V':
            return 5;
        case 'X':
            return 10;
        case 'L':
            return 50;
        case 'C':
            return 100;
        case 'D':
            return 500;
        case 'M':
            return 1000;
        default:
            return -1;
    }
}


function romanToDecimal(romans) {
    const roman = romans.toUpperCase();
    let decimalValue = 0;
    for (let i = 0; i < roman.length; i++) {
        let x1 = trackValue(roman.charAt(i));

        if (i + 1 < roman.length) {
            let x2 = trackValue(roman.charAt(i + 1));

            if (x1 >= x2) {
                decimalValue += x1;
            } else {
                decimalValue += x2 - x1;
                i++;
            }
        } else {
            decimalValue += x1;
        }
    }
    return decimalValue;
}


module.exports = romanToDecimal;