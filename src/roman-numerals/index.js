/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */

const romanNum = {
 'I': 1,

 'V': 5,
 
 'X':10,
 
 'L':50,
 
 'C':100,
 
 'D':500,
 
 'M': 1000

}


function romanToDecimal(str) {
    // 
    let result = 0;
    let array = str.toUpperCase().split('');
   
    for (let i = 0; i < array.length; i++) {
        let presentValue = romanNum[array[i]]
        let nextValue = romanNum[array[i + 1]]

        if (presentValue < nextValue) {
            result -= presentValue;
        } else {
            result+= presentValue;
        }

    }
    return result;
    
}
console.log(romanToDecimal("cm"))
    
    

module.exports = romanToDecimal;
