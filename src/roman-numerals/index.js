/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    const keys = { I : 1, V : 5, X: 10, L: 50, C: 100, D: 500, M: 1000}
    let number = 0;


    for(let i = 0; i < roman.length; i++){
        let previousValue = keys[roman.charAt(i)]
        let nextValue = keys[roman.charAt(i+1)]

        if(previousValue >= nextValue){
            number += previousValue
            
        }else if(previousValue < nextValue){
            number += (nextValue - previousValue) 
            i++;
        }else{
            number += previousValue;
        }

    }

    return number
}





module.exports = romanToDecimal;
