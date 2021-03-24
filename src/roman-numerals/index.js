/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
  let romanKeys=["M", "D", "C", "L", "X", "V", "I" ];
  let values = [1000, 500, 100, 50, 10, 5, 1];
  let result = 0;
  for(let i = 0; i<roman.length; i++){
   let currentKey = romanKeys.indexOf(roman[i]);
    let currentValue = values[currentKey]
  let nextKey = romanKeys.indexOf(roman[i+ 1]);
   let nextValue = values[nextKey]
    if(nextValue > currentValue){
      result -= currentValue
    }
    else{
      result += currentValue
    }
  }
    return result;  
}

module.exports = romanToDecimal;
