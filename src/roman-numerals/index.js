/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
     
        roman = roman.toUpperCase();
        let decimalValue = 0;
        
        for (let i = 0; i < roman.length; i++) {
            switch (roman[i]) {
                case 'M':
                    decimalValue += 1000;
                    break;
                case 'D':
                    decimalValue += 500;
                    break;
                case 'C':
                    if (roman[i + 1] === 'D' || roman[i + 1] === 'M') {
                        decimalValue -= 100;
                    } else {
                        decimalValue += 100;
                    }
                    break;
                case 'L':
                    decimalValue += 50;
                    break;
                case 'X':
                    if (roman[i + 1] === 'L' || roman[i + 1] === 'C') {
                        decimalValue -= 10;
                    } else {
                        decimalValue += 10;
                    }
                    break;
                case 'V':
                    decimalValue += 5;
                    break;
                case 'I':
                    if (roman[i + 1] === 'V' || roman[i + 1] === 'X') {
                        decimalValue -= 1;
                    } else {
                        decimalValue += 1;
                    }
                    break;
            }
        }
        
        return decimalValue;
    }
    

    
    
module.exports = romanToDecimal;
