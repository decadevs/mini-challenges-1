/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    let dict = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
      };

      let sum = 0;
      let operator = '+'
      
      for(let i = 0; i < roman.length; i++){
       
        if(operator === "-"){
          operator = '+';
          continue;
        }
        
        let val = dict[roman[i]];
       
        let nextVal = (typeof roman[i + 1] !== 'undefined') ? dict[roman[i + 1]] :
         dict[roman[i]]; 
        
        if( val >= nextVal ){
          sum += val;
          operator = '+'
        }else{
          sum += (nextVal - val);
          operator = '-'
        }
      }
      return sum
};

module.exports = romanToDecimal;
