/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    let split = roman.split('');
    let values = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    }
    split.map( i => {
      if(i !== values.keys) {return 'wrong roman number'};
    })
    for(i = 0; i < split.length; i++) {
      let sum = 0;
      let char = split[i];
      for(j = i+1; j < split.length; j++) {
        let char2 = split[j];
        if(values[char] > values[char2]) {
        sum = sum + values[char];
        return sum;
        } else {
          sum = sum + (values[char2] - values[char]);
          return sum;
        }
      }
    }
  }
  console.log(romanToDecimal("eee"))

module.exports = romanToDecimal;
