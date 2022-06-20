/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    
    // let input = roman.toUpperCase
    
    const converter= {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let result = 0;
    let i = 0;
    while(i < roman.length){
        let first = roman[i];
        let next = roman[i + 1];
        if(converter[first] < converter[next]){
            result += converter[next] - converter[first];
            i+=2;
        }else {
            result += converter[first];
            i++;
        }
    } 
    return result
}

module.exports = romanToDecimal;
