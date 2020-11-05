/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */

const compare = {
    "M": 1000,
    "CM": 900,
    "D": 500,
    "CD": 400,
    "C": 100,
    "XC": 90, 
    "L": 50,
    "XL": 40,
    "X": 10,
    "IX": 9,
    "V": 5,
    "IV": 4,
    "I": 1
};

function romanToDecimal(roman) {
    const array = roman.split('');

    let total = 0;
    let current;
    let currentValue;
    let next;
    let nextValue;
       
for(let i = 0; i < array.length; i++){
    current = array[i];
    currentValue = compare[current];

    next = array[i + 1]
    nextValue = compare[next];

    if(currentValue < nextValue){
        total -= (currentValue)  
    }
    else {
   total += (currentValue)
    }
    
 }
       
return total
    }
  
    


module.exports = romanToDecimal;
