/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    let template = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000
    }
    let result = 0;
    let prev = 0;
    for(let i = 0; i < roman.length; i++) {
        let decimals = template[roman[i]];
        if(decimals > prev) {
            result += decimals - 2 * prev
        } else {
            result += decimals
        }
        
        prev = decimals
    }
    return result;
}


module.exports = romanToDecimal;
