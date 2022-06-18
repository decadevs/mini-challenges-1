/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    const converter = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    }
    let number = ''

    for (let key in converter){
        //console.log(key)
        //console.log(converter[key])
        while(roman >= converter[key]){
            number += key;
            roman -= converter[key];
        }
    }
    return number

    
}
console.log(romanToDecimal(14))

module.exports = romanToDecimal;
