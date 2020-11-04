/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    let decimal = 0;
    let map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    for (var i = 0; i < roman.length ; i++){
        decimal += map[roman[i]];}
        if (roman.includes('IV') || roman.includes('IX')){
            decimal -= 2;
        }
        if (roman.includes('XL') || roman.includes('XC')){
            decimal -= 20;
        }
        if (roman.includes('CD') || roman.includes('CM')){
            decimal -= 200;
        }
    return decimal;
}

module.exports = romanToDecimal;