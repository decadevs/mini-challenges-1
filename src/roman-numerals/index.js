/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    const splitArr = Array.from(roman)
    sum = 0;
    const roman_values = {
    '0': 0,
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
    };
    
    for( let idx=0; idx < splitArr.length; idx++){
         if(splitArr[idx] === 'I' && splitArr[idx+1] === 'V') {
             sum += roman_values[splitArr[idx+1]] - 1;
             splitArr[idx] = '0';
             splitArr[idx+1] = '0';
         }
         else if (splitArr[idx] === 'I' && splitArr[idx+1] === 'X') {
             sum += roman_values[splitArr[idx+1]] - 1;
             splitArr[idx] = '0';
             splitArr[idx+1] = '0';
         }
         else if (splitArr[idx] === 'X' && splitArr[idx+1] === 'L') {
             sum += roman_values[splitArr[idx+1]] - 10;
             splitArr[idx] = '0';
             splitArr[idx+1] = '0';
         }
         else if (splitArr[idx] === 'X' && splitArr[idx+1] === 'C') {
             sum += roman_values[splitArr[idx+1]] - 10;
             splitArr[idx] = '0';
             splitArr[idx+1] = '0';
            }
         else if (splitArr[idx] === 'C' && splitArr[idx+1] === 'D'){

            sum += roman_values[splitArr[idx+1]] - 100;
            splitArr[idx] = '0';
            splitArr[idx+1] = '0';
         }
         else if (splitArr[idx] === 'C' && splitArr[idx+1] === 'M')  {
            sum += roman_values[splitArr[idx+1]] - 100;
            splitArr[idx] = '0';
            splitArr[idx+1] = '0';
         }
         else sum += roman_values[splitArr[idx]]
    }
    return sum
}

// console.log(romanToDecimal('MCMXLIV'))
module.exports = romanToDecimal;
