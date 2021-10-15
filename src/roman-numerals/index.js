/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
 function romanToDecimal(roman) {
    const romanNum = "IVXLCDM";
    const numerals=[1,5,10,50,100,500,1000];
    let total=0;
    while(roman){
       if(!!roman[1] && romanNum.indexOf(roman[0]) < romanNum.indexOf(roman[1])){
          total += (numerals[romanNum.indexOf(roman[1])] - numerals[romanNum.indexOf(roman[0])]);
          roman = roman.substring(2, roman.length);
       } else {
          total += numerals[romanNum.indexOf(roman[0])];
          roman = roman.substring(1, roman.length);
       }
    }
    return total;
 };

module.exports = romanToDecimal;

