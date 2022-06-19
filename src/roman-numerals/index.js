/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
 function romanToDecimal(roman) {

    let decimal = 0; 

    const numerals = { I:1, V:5, X:10, L:50, C:100, D:500, M:1000 };

    //compare neighbouring values and calculate decimal
    for( let i =0; i < roman.length ; i++){
      
        if(numerals[roman[i]] < numerals[roman[i+1]]){
            decimal -=  numerals[roman[i]]
        }else{
            decimal +=  numerals[roman[i]]
        }      
    }

    return decimal;

}

module.exports = romanToDecimal;
