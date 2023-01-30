/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
  let sum = 0;
  let romanNum = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };


for (let i = 0; i < roman.length; i++){


  if (romanNum[roman[i]] < romanNum[roman[i+1]]){

    sum = sum - romanNum[roman[i]];
  } else {
    sum = sum + romanNum[roman[i]];
  }
}
return sum;
}

module.exports = romanToDecimal;
