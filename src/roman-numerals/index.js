/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {

        const romanChange = {
        
        I: 1,
        
        V: 5,
        
        X: 10,
        
        L: 50,
        
        C: 100,
        
        D: 500,
        
        M: 1000
        
        };
        
        var result = 0;
        
        
        for(var i = 0; i < roman.length; i++){
        
        if(roman[i] === 'I' && roman[i + 1] === 'V'){
        
        result += 4;
        
        i++;
        
        }else if(roman[i] === 'I' && roman[i + 1] === 'X'){
        
        result += 9;
        
        i++;
        
        }else if(roman[i] === 'X' && roman[i + 1] === 'L'){
        
        result += 40;
        
        i++;
        
        }else if(roman[i] === 'X' && roman[i + 1] === 'C'){
        
        result += 90;
        
        i++;
        
        }else if(roman[i] === 'C' && roman[i + 1] === 'D'){
        
        result += 400;
        
        i++;
        
        }else if(roman[i] === 'C' && roman[i + 1] === 'M'){
        
        result += 900;
        
        i++;
        
        }else{
        
        result += romanChange[roman[i]];
        
        }
        
        }
        
        return result;
        
        }
module.exports = romanToDecimal;
