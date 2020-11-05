/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    let map = {
        "M": 1000,
        "D": 500,
        "C": 100,
        "L": 50,
        "X": 10,
        "V": 5,
        "I": 1,
      }
      let romanValue = 0;
      let romanValueArray = [];
      let decimalValue = 0;
      console.log(romanValue);
      for (let i=0; i<roman.length; ){
    
        if (map[roman[i]] >= map[roman[i+1]] || i == (roman.length -1)){
          romanValue = map[roman[i]];
          romanValueArray.push(romanValue);
          i++;
          console.log(romanValue);
          console.log(romanValueArray)}
        else {
          romanValue = map[roman[i+1]] - map[roman[i]];
          romanValueArray.push(romanValue);
          i+=2;
           console.log(romanValue);
          console.log(romanValueArray)}
        }
      for (let j=0; j<romanValueArray.length; j++){
        decimalValue+= romanValueArray[j];
      }
        
         return decimalValue;
}

module.exports = romanToDecimal;
