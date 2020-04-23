/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {

  let obj = {'I': 1, 'V' : 5, 'X' : 10, 'L' : 50, 'C' : 100, 'D' : 500, 'M' : 1000};

  //single character
  if(roman.length == 1){
    if(roman == 'I'){return 1}
    if(roman == 'V'){return 5}
    if(roman == 'X'){return 10}
    if(roman == 'L'){return 50}
    if(roman == 'C'){return 100}
    if(roman == 'D'){return 500}
    if(roman == 'M'){return 1000}
  }

  //Single multiple and deduction with I and X
  if(roman.length == 2 && roman[0] == roman[1]){
    return obj[roman[1]] + obj[roman[0]];
  }
  else if(roman.length == 2 && obj[roman[0]] < obj[roman[1]]){
    return obj[roman[1]] - obj[roman[0]];
  }

  //Addition of all numbers
  let total = 0;
  for(let i = 0; i < roman.length; i++){
    if(obj[roman[i]] < obj[roman[i + 1]]){
      total += obj[roman[i + 1]] - obj[roman[i]];
      i += 1;
    }
    else{
      total += obj[roman[i]];
    }
  }

  return total;
  
}

module.exports = romanToDecimal;
