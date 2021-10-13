/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
  const romanNum =['M' ,'CM','D','CD ', 'C ','XC', 'L ','XL ','X ','IX','V ','IV ','I']
  const number =[1000, 900, 500,400,100,90,50,40,10,9,5,4,1]
  let conRoman =0;
  for (let i=0;i< number.length; i++){
    while(roman >= number[i]){
    conRoman = romanNum + conRoman;
    }

  }
 return conRoman;
}

module.exports = romanToDecimal;



