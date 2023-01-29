/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    let result = 0;
    let splitRoman = roman.split('') // [x, i]
    const romanNum = {I : 1, V : 5, X : 10, L : 50, C : 100, D : 500, M : 1000} ;
for(let i = 0; i < splitRoman.length; i++){
    if(romanNum[splitRoman[i]] < romanNum[splitRoman[i + 1]]){ //
        result -= romanNum[splitRoman[i]]
    }else {
        result += romanNum[splitRoman[i]]
    }
}
return result;
}

module.exports = romanToDecimal;


