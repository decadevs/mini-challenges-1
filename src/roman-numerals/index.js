/**
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */

function romanToDecimal(roman) {
  //define roman numerals
  const numerals = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000}
  let count = 0

  // check for subtractive patterns
  // loop through subtractive obj and if exists, slice roman and increase count
  const subChars = {'IV':4, 'IX':9, 'XL':40, 'XC':90,'CD':400, 'CM':900}
  for (let i of Object.keys(subChars)) {
    if (roman.includes(i)) {
        roman = roman.replace(i, '')
        count += subChars[i]
    }
}

   // evaluate remaining characters, increase count
   if (roman !== '') {
       for (let char of roman) {
           count += numerals[char]
           roman = roman.replace(char, '')
       }
   }

   return count
}

module.exports = romanToDecimal;
