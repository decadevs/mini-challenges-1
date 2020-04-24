/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    let obj={"I":1,"V":5,"X":10,"L":50,"C":100,"D":500,"M":1000}
  let arr1=["M","D","C","L","X","V","I"]
  let arr2=[...roman]
  let result=0
  for(var i=0;i<arr2.length;i++){
    if(i!==arr2.length-1&&arr1.indexOf(arr2[i])>arr1.indexOf(arr2[i+1])){
      result+=-1*obj[arr2[i]]
    }
    else{
      result+=obj[arr2[i]]
    }
  }
  return result
}

module.exports = romanToDecimal;
