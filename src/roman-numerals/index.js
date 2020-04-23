/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
  let arr = roman.split('');
  let decimal = 0;
  for(let i=0; i<arr.length; i++) {
    switch (arr[i]) {
      case 'C':
        if(arr[i+1] === 'M' || arr[i+1] === 'D') {
          decimal -= 100;
        }else{
          decimal += 100;
        }
        break;
      case 'D':
        decimal += 500;
        break;
      case 'I':
        if(arr[i+1] === 'V' || arr[i+1] === 'X') {
          decimal -= 1;
        }else{
          decimal += 1;
        }
        break;
      case 'L':
        decimal += 50;
        break;
      case 'M':
        decimal += 1000;
        break;
      case 'V':
        decimal += 5;
        break;
      case 'X':
        if(arr[i+1] === 'L' || arr[i+1] === 'C') {
          decimal -= 10;
        }else{
          decimal += 10;
        }
        break;
      default:
        decimal += 0;
    }

  }

  return decimal;
}

romanToDecimal('C');

module.exports = romanToDecimal;
