/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    let decimal = 0;

    const romanObject = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
   
    
    for (let i = 0; i < roman.length; i++) {

            const first = romanObject[roman[i]];
            const latter = romanObject[roman[i + 1]];
    
            if (latter === undefined) {
                decimal += first;
                continue;
            }
    
            if (first >= latter) {
                decimal += first;
                continue;
            }
    
            decimal -= first;

    }

    return decimal
}

module.exports = romanToDecimal;
