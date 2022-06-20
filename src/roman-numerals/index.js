/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */

function romanToDecimal(roman) {

  // function value stores 'IVXLCDM' strings and their decimal equivalent
  function romanStrings(romanString) {
    if (romanString == 'I')
        return 1;
    if (romanString == 'V')
        return 5;
    if (romanString == 'X')
        return 10;
    if (romanString == 'L')
        return 50;
    if (romanString == 'C')
        return 100;
    if (romanString == 'D')
        return 500;
    if (romanString == 'M')
        return 1000;
    return -1;
  }

  let result = 0;
        for (i = 0; i < roman.length; i++){
            // Get value of roman string and store in s1
            let s1 = romanStrings(roman.charAt(i));

            // Get value of roman string + 1 and store in s2
            if (i + 1 < roman.length) {
                let s2 = romanStrings(roman.charAt(i + 1));

                // Use if statement to compute roman strings principles of addition and substraction
                if (s1 >= s2) {
                    result = result + s1;
                } else {
                    result = result + s2 - s1;
                    i++;
                }
            } else {
                result = result + s1;
            }
        }

        return result;
    }


module.exports = romanToDecimal;
