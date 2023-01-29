/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman){
    /*create and object called conversionTable containing
     primary roman numerals and corresponding decimals*/

let conversionTable = { "I":1, "V":5, "X":10, "L":50, "C": 100, "D": 500, "M": 1000};

/* CREATE A VARIABLE  SUM  TO KEEP TRACK OF ADDING  OR SUBTACT AS NEEDED*/
  let sum = 0;
  /* newStr to Hold the value of split roman input*/
  let newStr = roman.split("");
 /* loop through newStr */
 
 
 
  for(let i = 0; i < newStr.length; i++){

    /*A variable called currentValue hold value  of index in conversion Table */
    let  currentValue = conversionTable[newStr[i]];

/* A variable name called nextValue check the value of the next index*/
     let nextValue = conversionTable[newStr[i + 1]];

/*if currentValue is less than nextvalue subtract from sum else add to sum */
      if(currentValue < nextValue){
        sum -= (currentValue);
      }else{
        sum += (currentValue);
      }
  }
  return Number(sum);
  }

  //console.log(romanToDecimal("IX"))



  module.exports = romanToDecimal;

