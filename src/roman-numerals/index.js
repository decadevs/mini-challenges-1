/*
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal (roman) {

    let decimal = 0;
    let romanArray = roman.split('');

    romanArray.map(a => {
        switch(a) {

            case 'I': 
            if(romanArray.indexOf('V') == romanArray.indexOf(a) + 1 || romanArray.indexOf('X') == romanArray.indexOf(a) + 1) {
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
                if(romanArray.indexOf('L') == romanArray.indexOf(a) + 1 || romanArray.indexOf('C') == romanArray.indexOf(a) + 1) {
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
                if(romanArray.indexOf('D') == romanArray.indexOf(a) + 1 || romanArray.indexOf('M') == romanArray.indexOf(a) + 1) {
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
    });
    
    
        return decimal;
    
    }


module.exports = romanToDecimal;
