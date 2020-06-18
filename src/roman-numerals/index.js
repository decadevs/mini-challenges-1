/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    let decimal = {

        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1
    };

    let result = 0;
    let input = roman.split('');

    for (let i = 0; i < input.length; i++) {
        let current = decimal[input[i]];
        let next = decimal[input[i + 1]];

        if (current < next) {
            result -= current;
        } else {
            result += current;
        }

    };

    return result;
}

module.exports = romanToDecimal;