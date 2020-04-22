/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    let result = 0;
    let i = 0;
    while (i < roman.length) {
        if (roman[i] === 'I') {
            if (roman[i + 1] === 'V') {
                result += 4;
                i+=2;
            } else if (roman[i + 1] === 'X') {
                result += 9;
                i+=2;
            } else {
                result += 1;
                i++;
            }
        } else if (roman[i] === 'X') {
            if (roman[i + 1] === 'L') {
                result += 40;
                i+=2;
            } else if (roman[i + 1] === 'C') {
                result += 90;
                i+=2;
            } else {
                result += 10;
                i++;
            }
        } else if (roman[i] === 'C') {
            if (roman[i + 1] === 'D') {
                result += 400;
                i+=2;
            } else if (roman[i + 1] === 'M') {
                result += 900;
                i+=2;
            } else {
                result += 100;
                i++;
            }
        } else if (roman[i] === 'V') {
            result += 5;
            i++;
        } else if (roman[i] === 'L') {
            result += 50;
            i++;
        } else if (roman[i] === 'D') {
            result += 500;
            i++;
        } else if (roman[i] === 'M') {
            result += 1000;
            i++;
        }
    }
    return result;
}

module.exports = romanToDecimal;