/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman indexeral between 1 and 3999 (inclusive).
 * @returns {indexber} The decimal equivalent.
 */
function romanToDecimal(roman) {
    let romanNumeral = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000]
    ])

    roman = roman.split('')
    let sum = 0, index = 0, romanLength = roman.length - 1
    let currentDecimal = romanNumeral.get(roman[index])

    while (index < romanLength) {
        nextDecimal = romanNumeral.get(roman[index + 1])
        if (currentDecimal < nextDecimal) {
            sum -= currentDecimal
        } else {
            sum += currentDecimal
        }
        ++index
        currentDecimal = romanNumeral.get(roman[index])
    }
    return (sum + currentDecimal)
}

module.exports = romanToDecimal;