/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    const romanFigure = roman.toUpperCase()
    const romanValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let sum = 0
    for(let i = romanFigure.length - 1; i > -1; i--){
        let tempValue
        if(romanValues[roman.charAt(i-1)] < romanValues[roman.charAt(i)]){
            tempValue = romanValues[roman.charAt(i)] - romanValues[roman.charAt(i-1)]
            sum+= tempValue
            i-=2
        }else if(romanValues[roman.charAt(i-1)] < romanValues[roman.charAt(i)]){
            sum+=romanValues[roman.charAt(i)]

        }
    }

    return sum

}

module.exports = romanToDecimal;
