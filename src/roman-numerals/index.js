/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    let numeral = new Map();

    numeral.set('I', 1);
    numeral.set('V', 5);
    numeral.set('X', 10);
    numeral.set('L', 50);
    numeral.set('C', 100);
    numeral.set('D', 500);
    numeral.set('M', 1000);
  
    let decimal = 0;
  for(let i = 0; i < roman.length; i++) {
       const numeralSymbol = numeral.get(roman[i]);
       const nextNumeralSymbol = (i + 1 < roman.length) ? numeral.get(roman[i + 1]) : 0;

       if(numeralSymbol < nextNumeralSymbol) {
                 decimal -= numeralSymbol;
       } else {
                 decimal += numeralSymbol;
       }
  }
  return decimal;
}

module.exports = romanToDecimal;
