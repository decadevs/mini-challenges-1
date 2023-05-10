/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    let obj = { 
        "M": 1000,
        "D": 500,
        "C": 100,
        "L": 50,
        "X": 10,
        "V": 5,
        "I": 1 
        }
        
        let sum = 0;
        
        roman= roman.split('');
        
        for(let i=0; i<roman.length; i++){
        if(i+1<roman.length){
            if(obj[roman[i]] < obj[roman[i+1]]){
                sum-=obj[roman[i]];
            }else{
                sum+=obj[roman[i]]
            }
        }else{
            sum+=obj[roman[i]];
        }
        
    }
        return sum;
}

module.exports = romanToDecimal;
