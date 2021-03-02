/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    let decimal = 0;

    for (var i = 0; i < roman.length; i++){
        if (roman[i] == 'I') {
            if (i+1 < roman.length && roman[i+1] == 'V'){
                decimal += 4;
                i++;
            } else if (i+1 < roman.length && roman[i+1] == 'X'){
                decimal += 9;
                i++;
            } else {
                decimal += 1;
            }
        } else if (roman[i] == 'X') {
            if (i+1 < roman.length && roman[i+1] == 'L'){
                decimal += 40;
                i++;
            } else if (i+1 < roman.length && roman[i+1] == 'C'){
                decimal += 90;
                i++;
            } else {
                decimal += 10;
            }
        } else if (roman[i] == 'C') {
            if (i+1 < roman.length && roman[i+1] == 'D'){
                decimal += 400;
                i++;
            } else if (i+1 < roman.length && roman[i+1] == 'M'){
                decimal += 900;
                i++;
            } else {
                decimal += 100;
            }
        } else if (roman[i] == 'V') {
            decimal += 5;
        }else if (roman[i] == 'L') {
            decimal += 50;
        }else if (roman[i] == 'D') {
            decimal += 500;
        }else if (roman[i] == 'M') {
            decimal += 1000;
        }
    }
    return decimal;
        
}

module.exports = romanToDecimal;
