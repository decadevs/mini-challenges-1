/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {

    // Creating an object: key - Value pair
    let romanSymbol = {
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
        I: 1
    };

    // Since we are returning a string value
    let romanResult = "";
    // loop through the Key-Value Pair
    for(let key in romanSymbol) {
        while(roman >= romanSymbol[key]) {
            romanResult = romanResult + key;
            roman = roman - romanSymbol[key];
        }
    } 
    return romanResult;


}
romanToDecimal();
module.exports = romanToDecimal;
