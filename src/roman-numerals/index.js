/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */

function conversion(rom) {
     if (rom == 'I')
       return 1;
    if (rom == 'V')
        return 5;
    if (rom == 'X')
        return 10;
    if (rom == 'L')
        return 50;
    if (rom == 'C')
        return 100;
    if (rom == 'D')
        return 500;
    if (rom == 'M')
        return 1000;
    return -1;
}

function romanToDecimal(roman){

    let result = 0;
    for (let i = 0; i<roman.length; i++){
        //get the value for roman symbol [i]
        let str1 = conversion(roman.charAt(i));
        //get the value for roman symbol [i]+1
        if (i + 1 < roman.length){
            let str2 = conversion(roman.charAt(i+1));
        //lets compare the values
            if(str1 >= str2){
            // if the value of the current symbol is greater than or equal to 
            //the next symbol.
            result = result + str1;
            }else{
            // the if the value  of the current symbol is less than the next symbol
            result = result + (str2 - str1);
                i++;
                }
        }
        else {
            result = result + str1;
        }


        }
         return result;
      
      
 
    }

console.log((romanToDecimal("CM")));







module.exports = romanToDecimal;
