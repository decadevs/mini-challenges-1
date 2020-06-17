/*
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal (roman) {

    let decimal = 0;
    let romanArray = roman.split('');

    for(let i = 0; i < romanArray.length; i++) {
        switch(romanArray[i]) {

            case 'I': 
                if(romanArray[i + 1] === 'V' || romanArray[i + 1] === 'X') {
                decimal -= 1
            }
            else{
                decimal += 1
            }
            break;

            case 'V':
                decimal += 5;
                break;

            case 'X':
                if(romanArray[i + 1] === 'L' || romanArray[i + 1] === 'C') {
                    decimal -= 10
                }
                else{
                    decimal += 10
                }
                break;

            case 'L':
                decimal += 50;
                break;

            case 'C':
                if(romanArray[i + 1] === 'D' || romanArray[i + 1] === 'M') {
                    decimal -= 100
                }
                else{
                    decimal += 100
                }
                break;

            case 'D':
                decimal += 500;
                break;

            case 'M':
                decimal += 1000;
                break; 
          
        }
    }
    
    
    return decimal;    
}


module.exports = romanToDecimal;
