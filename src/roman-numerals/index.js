/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
        const romanNum = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
    
        let result = 0;
    
        for(let i = 0; i < roman.length; i++){
            let curValue = romanNum[roman[i]];
            let nxtValue = romanNum[roman[i + 1]];
            
            if (nxtValue && nxtValue > curValue){
                result += nxtValue - curValue;
                    i++;
            } else {
                result += curValue;
            } 
        } 
        return result;
    }

module.exports = romanToDecimal;
