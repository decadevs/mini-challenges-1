/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    // Declaring the Variable Objects
        let values = {
          "I": 1,
          "V": 5,
          "X": 10,
          "L": 50,
          "C": 100,
          "D": 500,
          "M": 1000,
        };
        
        let total = 0;
    // loop through the Objects using for-loop 
        for (let index = 0; index < roman.length; index++) {

    // Assigning the object index to a Variable
          let numeral = values[roman[index]];

    // Check if the values of index + 1 is less than the parameter and assign it to a variable
          if (index+1 < roman.length) {
            let numeral2 = values[roman[index+1]]

    // Compare Both index if the value of index is less than the value of index + 1. 
    // Subtract the value of index + 1 from index else return the value of index.
    
            if (numeral < numeral2) {
              total += (numeral2 - numeral);
              i++;
            } else {
              total += numeral;
            }
          } else {
            total += numeral;
          }
        }
        return total;
      }
    
    

module.exports = romanToDecimal;
