/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    const romanNumeralsDictionary = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000,
    }
    let decimal = [];
    let sum = 0
    let negative = 0
    let result = 0

    //Convert Roman to equivalent Decimal and push to array
    for(let i = 0; i < roman.length; i++){ 
       let num = romanNumeralsDictionary[roman[i]]
        decimal.push(num);
        }

        //Loop through array 
        for(let j = 0; j < decimal.length; j++){  
            if(decimal[j] < decimal[j + 1]){ 
                negative -= (decimal[j])
                continue
            }
                sum = sum + decimal[j]
        }
        result = (negative != null)?  sum + negative : sum
        return result
    }
        
    romanToDecimal('XCIV')
    module.exports = romanToDecimal;
