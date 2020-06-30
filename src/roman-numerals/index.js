/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) 
{
    //if (roman==null) return -1;
     //roman=roman.toUpperCase;
     const array = roman.split(''); 
     const conversion={"M":1000, "D":500, "C":100, "L":50,"X":10,"V":5, "I":1};
     let total=0;
     let current;
     let currentValue;
     let next;
     let nextValue;
     for(let index=0; index < array.length; index++)
     {
         current=array[index];
         currentValue=conversion[current];
         next=array[index+1];
         nextValue=conversion[next];

         if (currentValue < nextValue )
        {
            total -= (currentValue);
        }
         else 
        {
            total += (currentValue);  
        }
         

     }
     if (total < 1 || total > 3999){
         return "Please enter a number between 1-3999";
         }
      else return total;
}

module.exports = romanToDecimal;
