/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
/* function romanToDecimal(roman) {} */

function romanToDecimal(roman){
    roman = roman.toLowerCase()
    const baseRomNum = {
        i:1,
        v:5,
        x:10,
        l: 50,
        c: 100,
        d: 500,
        m: 1000
    }
    let decNum = 0
    
    for(i in roman){
        let key = roman[i]
        let preKey = roman[i-1]
        if(baseRomNum[key] > baseRomNum[preKey]){
            decNum += (baseRomNum[key]-2*baseRomNum[preKey])
        }else{
            decNum += baseRomNum[key]
        }
        
    }

    return decNum >= 4000 ? 'Invalid number' : decNum
}

console.log(romanToDecimal('LX'))

module.exports = romanToDecimal;
