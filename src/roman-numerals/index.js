/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    let storeRoman = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000
    }
    let cummulative = 0;
    let beforeCum = 0;
    for(let i = 0; i < roman.length; i++) {
        let storeDecimals = storeRoman[roman[i]];
        if(storeDecimals > beforeCum) {
            cummulative += storeDecimals - 2 * beforeCum
        } else {
            cummulative += storeDecimals
        }
        
        beforeCum = storeDecimals
    }
    return cummulative;
    
}

module.exports = romanToDecimal;
