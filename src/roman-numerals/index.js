/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
 function romanToDecimal(str) {

  var roman = {'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000};
  var number = 0;

  for(let i = 0; i < str.length; i++){
    if(roman[str[i + 1]] > roman[str[i]]){
      number += roman[str[i+1]] - roman[str[i]]
      i = i + 1
    }
    else{
      number += roman[str[i]]
    }
    console.log(roman[str[i]]);
  }

  return number
}



module.exports = romanToDecimal;
