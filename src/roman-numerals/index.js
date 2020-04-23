/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    const dict = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    const len = roman.length;
    let i = 0;
    let sum = 0;
    let value1, value2;
    while (i < len) {
        value1 = roman[i];

        if ((i + 1) < len) {
            value2 = roman[i + 1];
            if ((value1 !== value2) && (['I', 'X', 'C'].includes(value1))) {
                sum += (dict[value2] > dict[value1])? (dict[value2] - dict[value1]) : dict[value1];
                i += (dict[value2] > dict[value1])? 2 : 1;
            } else {
                sum += dict[value1];
                i += 1;
            }
       } else {
           sum += dict[value1];
           i += 1;
       }
    }
    //console.log(sum);
    return sum;
}

//let roman = "CXLIV";
//romanToDecimal(roman);
module.exports = romanToDecimal;
