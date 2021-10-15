//**Implement the solution in this function
/*
* @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
* @returns {number} The decimal equivalent.
*/

function romanToDecimal(roman) {
       const romanNum = "IVXLCDM";
       const l=[1,5,10,50,100,500,1000];
       let sum=0;
       while(roman){
          if(!!roman[1] && romanNum.indexOf(roman[0]) < romanNum.indexOf(roman[1])){
             sum += (l[romanNum.indexOf(roman[1])] - l[romanNum.indexOf(roman[0])]);
             roman = roman.substring(2, roman.length);
          } else {
             sum += l[romanNum.indexOf(roman[0])];
             roman = roman.substring(1, roman.length);
          }
       }
       return sum;
    };

module.exports = romanToDecimal;


