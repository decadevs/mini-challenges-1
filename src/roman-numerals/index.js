/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
  roman = roman.toUpperCase();
  const romanVal = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000 }
  let romanNum = []
  let tempVal = 0;

  for (let index = 0; index < roman.length; index++) {
    romanNum.push(romanVal[roman[index]])
  }

  let result = romanNum[0];
  for (let index = 0; index < romanNum.length; index++) {
    tempVal = romanNum [index +1] //1 111
    //result = 6

      if(result >= tempVal){
        if (romanNum[index] >= tempVal){
          result = result + tempVal
        }else if (romanNum[index] < tempVal){
          let tempResult = tempVal - romanNum[index];
          result = result - romanNum[index]
          result = result + tempResult
        }
      }else if(result < tempVal ){

        result = tempVal - result
      }


  }
return result

}

module.exports = romanToDecimal;



