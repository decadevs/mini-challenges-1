/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {

    const romansValue = {"M":1000, "D":500, "C":100, "L":50, "X":10, "V":5, "I":1};

    const array = roman.split('');

    var total = 0;

    var currentValue;

    var nextValue;

    var n = array.length;

    for(let i = 0; i < n; i++){

        currentValue = romansValue[array[i]];

        nextValue = romansValue[array[i + 1]];

        if(currentValue >= nextValue){
            total += (currentValue);

        } else if(currentValue < nextValue){
            total -= (currentValue);

        } else if(currentValue && !nextValue){
            total += currentValue;
        }
        
    }
    return total;
}

module.exports = romanToDecimal;
