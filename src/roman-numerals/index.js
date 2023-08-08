/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
        const romanNumeral = {'I': 1, 'V' : 5, 'X': 10, 'L' : 50, 'C': 100, 'D' : 500, 'M' : 1000};
          let result = 0;
    
          for(let i = 0; i < roman.length; i++){
            let curValue = romanNumeral[roman[i]];
            let nextValue = romanNumeral[roman[i + 1]];
    
            if (nextValue && nextValue > curValue){
                result += nextValue - curValue;
                   i++;
            }else{
                result += curValue;
            }                                                                        
          }
      return result;
    }

module.exports = romanToDecimal;
