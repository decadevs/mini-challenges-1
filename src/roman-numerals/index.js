/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
  const ROM = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,

}
let sum = 0;
let initialPoint, nextPoint;
for(let i = 0; i < roman.length; i++){
    initialPoint = roman[i];
    nextPoint = roman[i + 1];
    if(ROM[initialPoint] < ROM[nextPoint]){
        sum -= ROM[initialPoint];
    }
    else{
        sum += ROM[initialPoint];
    }
}
return sum;

}
console.log(romanToDecimal("CM"))
module.exports = romanToDecimal;
