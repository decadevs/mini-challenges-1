/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
  let romanToDecimal = {
    I : 1,
    V : 5,
    X : 10,
    L : 50,
    C : 100,
    D : 500,
    M : 1000
  };

  let number = 0;

 for (let i = 0; i < roman.length; i++) {
  let currentNumber = romanToDecimal[roman.charAt(i)];
  let nextNumber = romanToDecimal[roman.charAt(i + 1)];

  if(nextNumber){
    if (currentNumber >= nextNumber) {
        number += currentNumber;
 }else {
    number += (nextNumber - currentNumber);
  i++;
}

} else{
    number += currentNumber;
  }
 }
 console.log(number);
 return number;
}

module.exports = romanToDecimal;

romanToDecimal("MCMXCVI");

