/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    let romanObj = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000
    }

let newRoman = roman.split("");
let number = 0;

for(let i = 0; i < newRoman.length; i++){
    let current = newRoman[i];
    let currentValue = romanObj[current];
    let next = newRoman[i + 1];
    let nextValue = romanObj[next]

    if(currentValue < nextValue){
        number -= currentValue;
    }else{
        number += currentValue
    }
}

return number
}
module.exports = romanToDecimal;
