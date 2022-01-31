
/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
 function romanToDecimal(roman) {
  const romanNumeral = {
    M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1
};
let sum = 0
for (let i = 0; i < roman.length; i++) {
    if (roman[i] === 'I') {
        if (roman[i + 1] && (roman[i + 1] === 'X' || roman[i + 1] === 'V')) {
            sum += romanNumeral[roman[i + 1]] - 1
            i++
        } else {
            sum += romanNumeral[roman[i]]
        }

    } else if (roman[i] === 'X') {
        if (roman[i + 1] && (roman[i + 1] === 'L' || roman[i + 1] === 'C')) {
            sum += romanNumeral[roman[i + 1]] - 10
            i++
        } else {
            sum += romanNumeral[roman[i]]
        }

    }
    else if (roman[i] === 'C') {
        if (roman[i + 1] && (roman[i + 1] === 'D' || roman[i + 1] === 'M')) {
            sum += romanNumeral[roman[i + 1]] - 100
            i++
        } else {
            sum += romanNumeral[roman[i]]
        }

    } else {
        sum += romanNumeral[roman[i]]

    }

}

return sum
}
console.log(romanToDecimal('MMMMMXXXXXV'))

module.exports = romanToDecimal;
