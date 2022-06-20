/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
  const romanDictionary = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }
  function romanToDecimal(roman) {
      let totalDecimal =  0;

      for(let i = 0; i< roman.length; i++){
          let c = roman[i];

          let value1 = romanToDecimal(c);

          if(i+1 < roman.length){
              let value2 = romanCharToDecimal(roman[i+1]);

              if(value1>=value2){
                  totalDecimal = totalDecimal + value1;
              }else{
                  totalDecimal = totalDecimal + value2 - value1;
                  i++;
              }

          }else{
              totalDecimal = totalDecimal + value1;
          }
      }

      return totalDecimal;
  }
module.exports = romanToDecimal;
