/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
const romanToDecimal = (roman) => {
    let num = 0;
    let conv = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000
    }
     for(let i = 0; i < roman.length; i++){
         let  cur = roman[i];
         let nxt = roman[i+1];
         let curVal = conv[cur];
         let nxtVal = conv[nxt]
        if(curVal < nxtVal) {
            num += nxtVal - curVal
            i++;
        } else num += curVal
    }
        return num;
}

module.exports = romanToDecimal;
