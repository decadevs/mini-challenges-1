/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    const reg = /(.)\1\1\1/;
    const charInt = char=>{
        switch (char) {
            case 'I': return 1;
            case 'V': return 5;
            case 'X': return 10;
            case 'L': return 50;
            case 'C': return 100;
            case 'D': return 500;
            case 'M': return 1000;
            default: return -1;
        }
    }
    let val = charInt(roman.charAt(0));
    let num, prevNum
    if (reg.test(roman) || roman===null) {
        val = -1;
    } else {
        for(let i=1;i<roman.length;i++){
            num = charInt(roman.charAt(i));
            prevNum = charInt(roman.charAt(i-1));
            if(num <= prevNum)
                val += num;
            else
                val = (val - prevNum) + (num - prevNum); 
        }
    }
    return val;
}

module.exports = romanToDecimal;
