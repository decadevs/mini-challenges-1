/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
     
   let  arr = roman.split("")
   let  obj = {
     "I" : 1,"V": 5, "X" : 10,"L" : 50, "C" : 100, "D" : 500,  "M" : 1000
   }
   let ans = 0;
  for(let i = 0; i < arr.length ; i++ ){
    
    if(obj[arr[i]] < obj[arr[i + 1]] ){
        
        ans -= obj[arr[i]]
        
    }else{
        ans += obj[arr[i]]

    }
    

  }

  return ans

    
}

module.exports = romanToDecimal;
