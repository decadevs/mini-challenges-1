/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */

//function called "romanToDecimal" which takes in a single input,
//a string "roman" which represents a Roman numeral.
function romanToDecimal(roman) {
    //creation of an object called "rValues" that maps each Roman numeral
    //character to its corresponding integer value.  
    const rValues = {
      I:1,
      V:5,
      X:10,
      L:50,
      C:100,
      D:500,
      M:1000
     };
     //Initialization of a variable called "total" which is initially set to 0.
     //This variable will be used to store the final integer value of the Roman numeral.
     let total = 0;
     //A for loop to iterate through each character in the input string.
    for(let i = 0; i < roman.length; i++){
        //If the current roman numeral character is less than the next roman numeral character,
        //the current roman numeral character will be subtracted from the next roman numeral 
        //character, and vice versa.
        if(rValues[roman[i]] < (rValues[roman[i+1]])){
         total += ((rValues[roman[i+1]]) - rValues[roman[i]]);
         i++;
        } else {
          total += rValues[roman[i]];
        }
    }
    return total;
  };
  console.log(romanToDecimal("XL"));
  console.log(romanToDecimal("LX"));

module.exports = romanToDecimal;
