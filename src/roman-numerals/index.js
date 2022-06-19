/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
  roman = roman.toUpperCase();
  const romanVal = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000}; //object to store the defined keys and values
  let romanNum = [];
  let tempval =0;
  for(let i=0; i<roman.length; i++){
    romanNum.push(romanVal[roman[i]]) //
  }
  let result = roman[0];
  for(let i=0; i, romanNum.length; i++){
    tempval = romanNum[i+1];
    if(result >= tempval){
      if(romanNum[i] >= tempval){
        result +=  tempval;
      }
      else if(romanNum[i] < tempval){
        let tempResult = tempval - romanNum[i];
        result -= romanNum[i];
        result += tempResult;
      }
    }
    else if(result , tempval){
      result = tempval - result;
    }

  }
  return result;

}

module.exports = romanToDecimal;
