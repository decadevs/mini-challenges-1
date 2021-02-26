/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */

const conversion = { "M": 1000, "D": 500, "C": 100, "L": 50, "X": 10, "V": 5, "I": 1 };
function romanToDecimal(roman) {
    let array = roman.split('');
    let total = 0;
    let current, currentVal, next, nextVal;

    for(let i = 0; i < array.length; i++){
        current = array[i];
        currentVal = conversion[current];
        next = array[i+1];
        nextVal = conversion[next];

        if(currentVal < nextVal) total -= (currentVal);
        else total += (currentVal);
        nextVal = currentVal;
    }
    return total;
    
}

module.exports = romanToDecimal;
