/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    let romanNum = new Map()
    romanNum.set("I", 1)
    romanNum.set("V", 5)
    romanNum.set("X", 10)
    romanNum.set("L", 50)
    romanNum.set("C", 100)
    romanNum.set("D", 500)
    romanNum.set("M", 1000)

    roman = roman.replace("IV", "IIII").replace("IX", "VIIII")
    roman = roman.replace("XL", "XXXX").replace("XC", "LXXXX")
    roman = roman.replace("CD", "CCCC").replace("CM", "DCCCC")

    let numeral = 0

    for(let i = 0; i < roman.length; i++){
        numeral += romanNum.get(roman[i])
    }

    return numeral
}

module.exports = romanToDecimal;
