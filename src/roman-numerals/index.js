/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
  let upper = roman.toUpperCase();
  let split = upper.split('');
  let val = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
  let msg = '';
  split.forEach( i => {
    if(!val[i]) { msg = 'wrong roman number' };

  })
  if (msg.length > 0) return msg;
  let sum = 0;
  for(i = 0; i < split.length; i++) {
    let char = split[i];
    let char2 = split[i+1];
      if(val[char] < val[char2]) {
      sum -= val[char];
      } else {
        sum += val[char];
      }  
  }
  return sum;
}




module.exports = romanToDecimal;
