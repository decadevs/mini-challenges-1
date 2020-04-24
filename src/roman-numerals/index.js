/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    let decimal = 0;
    let romanObj = {                                     //roman to decimal conversions
        i: 1,
        v: 5,
        x: 10,
        l: 50,
        c: 100,
        d: 500,
        m: 1000
    }
    let romanArr = roman.toLowerCase().split('');      //convert input string to an array of lower case letters
    romanArr.map((char, i) => {
        if(romanArr[i + 1]) {
            if(romanObj[char] < romanObj[romanArr[i + 1]]) {    //checks roman string from left to right
                decimal += -(romanObj[char])                    //determining which is bigger. A bigger LHS
            }                                                   //would mean a subtraction for that duo
            else {
                decimal += romanObj[char]
            }
        }
        else {
            decimal += romanObj[char]
        }
    })
    return decimal
}

module.exports = romanToDecimal;