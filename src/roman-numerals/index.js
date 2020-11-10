/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
   function romanToDecimal(roman) {
      const conversion = {M:1000,D:500,C:100,L:50,X:10,V:5,I:1};
      let current;
      let currentValue;
      let next;
      let nextValue;
      let total = 0;
      let newRoman = roman.split("");
      console.log(newRoman)
      for(let i = 0; i<newRoman.length;i++){
          current = newRoman[i];
          currentValue = conversion[current];
          next = newRoman[i+1];
          nextValue = conversion[next];
          if(currentValue < nextValue){
              total-=currentValue;
          }
          else{
              total+=currentValue;  
          }
      }
      return total;
   }

module.exports = romanToDecimal;
