/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
  var data = {M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1};
  var numbers = roman.split('');
  var sum = 0, i;

  for(i = 0; i < numbers.length; i++)
  {
    console.log(data[numbers[i]])
    if(data[numbers[i]] < data[numbers[i+1]])
    {
      sum += data[numbers[i+1]] - data[numbers[i]];
      i++;
    }
    else
    {
      sum += data[numbers[i]];
    }
  }

  return sum;
}

module.exports = romanToDecimal;
