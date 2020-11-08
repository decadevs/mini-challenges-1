/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    var index = 0;
    var total = 0;
    var specialDec = [1, 10, 100];
    var numeralsMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    var romanToDecimalList = roman.split("").map((numeral)=> numeralsMap[numeral]);

    while(index < romanToDecimalList.length){
        var current = romanToDecimalList[index];
        var next = (1 + index < romanToDecimalList.length)? romanToDecimalList[index + 1] : 0;
        if (specialDec.includes(current) && current < next){
            total += next - current;
            index += 2;
        }else{
            total += current;
            index += 1;
        }
    }

    return total;
}

module.exports = romanToDecimal;
