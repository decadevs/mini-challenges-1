/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
const romanNum = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}

function romanToDecimal(roman) {
    const arr = roman.split('');
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        let presentValue = romanNum[arr[i]]

        let nextValue = romanNum[arr[i + 1]]

        if (presentValue < nextValue) {
            
            sum -= presentValue
        }
        else {
            sum += presentValue
        }
    }
    return sum
}

module.exports = romanToDecimal;

