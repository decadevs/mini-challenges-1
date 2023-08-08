/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {

    let romanDict = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000
    };

    let decimal = 0;
    let prevValue = 0;

    for (let i = roman.length - 1; i >= 0; i--) {
        let symbol = roman[i];
        let value = romanDict[symbol];

        if (value >= prevValue) {
            decimal += value;
        } else {
            decimal -= value;
        }

        prevValue = value;
    }

    return decimal;
} 

let testCases = "XXIV"//expected: 24  'MCMXCIV', expected: 1994 },
    // Add more test cases here
//console.log()
console.log(romanToDecimal(testCases));

module.exports = romanToDecimal;
