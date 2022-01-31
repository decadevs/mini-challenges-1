/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    let obj = {
            I: 1,
            V: 5,
            X: 10,
            L: 50,
            C: 100,
            D: 500,
            M: 1000,
        } //an object that holds the symbols of
        // roman numeral, this a way of declearing the them
    let number = 0;
    for (let i = 0; i < roman.length; i++) {
        if (obj[roman[i]] < obj[roman[i + 1]]) { //this condition is checking if the input at index any index
            //is less than the next one
            number -= obj[roman[i]] //if the first one string in the input is less minu it from the number count
        } else {
            number += obj[roman[i]] //if it does not meet the condition add it to the number count
        }

    }
    return number // after all retune number
}


module.exports = romanToDecimal;
