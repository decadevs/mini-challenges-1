/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */

 function romanToDecimal(roman) {
  let decimalValue =  0;

  for(let i = 0; i< roman.length; i++){
      let char = roman[i];

      let firstValue = converted(char);

      if(i+1 < roman.length){
          let secondvalue = converted(roman[i + 1]);

          if(firstValue>= secondvalue){
              decimalValue = decimalValue + firstValue;
          }else{
              decimalValue = decimalValue + secondvalue - firstValue;
              i++;
          }

      }else{
          decimalValue = decimalValue + firstValue;
      }
  }

  return decimalValue;
}
var container = {
I: 1,
V: 5,
X: 10,
L: 50,
C: 100,
D: 500,
M: 1000,
}
function converted(value){
  let finaldecimal = 0;
  for(let j in container){
      if(value==j){
          finaldecimal = container[j]
      }
   }
   return finaldecimal;
}



module.exports = romanToDecimal;
