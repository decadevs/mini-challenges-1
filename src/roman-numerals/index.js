/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    var decimal = {

        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1
    };

    var result = 0;
    var input = roman.split('');

    for (var i = 0; i < input.length; i++) {
        var cur = decimal[input[i]];
        var nex = decimal[input[i + 1]];

        if (cur < nex) {
            result += nex - cur;
            i++;
        } else {
            result += cur;
        }


    };

    return result;
}

module.exports = romanToDecimal;