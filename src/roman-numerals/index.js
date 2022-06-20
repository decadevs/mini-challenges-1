/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
 function romanToDecimal(roman) {
  let decimalResult =  0;

    for(let i = 0; i< roman.length; i++){
        let char = roman[i];

        let firstVal = convertedDecimal(char);

        if(i+1 < roman.length){
            let secondVal = convertedDecimal(roman[i+1]);

            if(firstVal>=secondVal){
                decimalResult = decimalResult + firstVal;
            }else{
                decimalResult = decimalResult + secondVal - firstVal;
                i++;
            }

        }else{
            decimalResult = decimalResult + firstVal;
        }
    }

    return decimalResult;
}

function convertedDecimal(romanNum){
    let decimalNum = 0;
    for(let j in romanNumeral)
    {
        if(romanNum==j){
            decimalNum = romanNumeral[j]
        }
     }
     return decimalNum;

}

let romanNumeral = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}

module.exports = romanToDecimal;
