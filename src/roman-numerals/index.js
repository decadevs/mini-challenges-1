/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
  if (roman == null) return -1;
  var num = charToInt(roman.charAt(0));
  var pre, curr;

   for (var i = 1; i <roman.length; i++){
     curr = charToInt(roman.charAt(i));
     pre = charToInt(roman.charAt(i-1));
   if(curr <= pre){
     num += curr;
  }else {
     num = num - pre*2 + curr;
  }
  }
  return num;
}

function charToInt(c){
  switch(c){
    case 'I': return 1;
    case 'V': return 5;
    case 'X': return 10;
    case 'L': return 50;
    case 'C': return 100;
    case 'D': return 500;
    case 'M': return 1000;
    default : return -1;
  }
}

module.exports = romanToDecimal;
