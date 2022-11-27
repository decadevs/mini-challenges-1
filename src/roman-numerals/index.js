/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
   let romanToNum = []
   let dict = { "I":1, "V":5, "X":10, "L":50, "C":100, "D":500, "M":1000 }
   let inputArray = roman.toUpperCase().split("")

   for(let i = 0; i < inputArray.length; i++){
      let current = i;
      let next = i + 1
      
      if(dict[inputArray[current]] < dict[inputArray[next]]){
         const storeVal = dict[inputArray[next]] - dict[inputArray[current]]
         romanToNum.push(storeVal)
         i++
      } else {
         romanToNum.push(dict[inputArray[current]])
      }      
   }
   return romanToNum.reduce((a, b) => a + b, 0)
}

module.exports = romanToDecimal;
