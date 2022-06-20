/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */


function romanToDecimal(roman) {
    let Romans = roman.toUpperCase();
    var number = 0
    var i = 0
    let keys= [];
    romanNumeral = [{I:1,V:5,X:10,L:50,C:100,D:500,M:1000,IV:4,IX:9,XL:40,XC:90,CD:400,CM:900}]

    while(i<Romans.length){

        romanNumeral.forEach(element => {
            keys = Object.keys(element);
       });
         // check if the length of roman is up to two then check if the two substring is in key
        if((i+1 < Romans.length) && (keys.includes(Romans.substring(i,i+2)))){

            number = number + romanNumeral[0][Romans.substring(i,i+2)]

            i+=2;
        }
        else{

            number = number + romanNumeral[0][Romans.substring(i,i+1)]
            i+=1
        }
    }
    return number;
}
module.exports = romanToDecimal;
console.log(romanToDecimal("MCMXLIV"))








