/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */

 const romanDic = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}
function romanToDecimal(roman) {
    let totalDecimal =  0;

    for(let i = 0; i< roman.length; i++){
        let c = roman[i];

        //converts the current roman numeral character to decimal
        let value1 = romanCharToDecimal(c);

        //this checks to know if the i+1 is an index within the string to avoid indexing a memory that does not exist
        if(i+1 < roman.length){
            //converts the next roman numeral character to decimal
            let value2 = romanCharToDecimal(roman[i+1]);

            //check if the current roman numeral decimal is greater than or equal the next roman numeral decimal
            if(value1>=value2){
                totalDecimal = totalDecimal + value1;
            }else{
                totalDecimal = totalDecimal + value2 - value1;
                i++;
            }

        }else{
            totalDecimal = totalDecimal + value1;
        }
    }

    return totalDecimal;
}

//this function converts single roman character to decimal
function romanCharToDecimal(charRom){
    let decimal = 0;
    for(let j in romanDic){
        if(charRom==j){
            decimal = romanDic[j]
        }
     }
     return decimal;
}

module.exports = romanToDecimal;
