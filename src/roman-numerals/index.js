/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
const charToNumber = (str) => {
    switch(str) {
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
function romanToDecimal(roman) {
    // For a null case
    if(roman == null) return -1;

    let numSum = 0;
    let nextNum, currentNum;

    for(let i = 0; i < roman.length; i++){
        currentNum = charToNumber(roman.charAt(i));
        nextNum = charToNumber(roman.charAt(i+1));

        if(currentNum < nextNum){
            numSum -= currentNum;
        }else{
            numSum += currentNum;
        }
    }

    return numSum;
}

module.exports = romanToDecimal;
