/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) { //A function romanToDecimal to convert roman-numerals to decimals
    let result = 0;
    let prev = 0;
        const map = {    //initialized an object to store roman numerals
            "I" : 1,
            "V" : 5,
            "X" : 10,
            "L" : 50,
            "C" : 100,
            "D" : 500,
            "M" : 1000
        }
        for(let i = 0; i < roman.length; i++) { //a for-loop to iterate over object keys
            let num = map[roman[i]];
            
            if(num > prev) {
              result += num - 2 * prev

            } else {
              result += num
            }
            prev = num
        }  
        return result;
      }
      

module.exports = romanToDecimal;
