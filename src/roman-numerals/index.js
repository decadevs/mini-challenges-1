/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    const arr = roman.split("");
    const vals = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
    let num = 0;
    for (i = 0; i < arr.length; i++){
        if (vals[arr[i]] < vals[arr[i + 1]]){
            num += vals[arr[i+1]] - vals[arr[i]];
            i++;
        }else{
            num += vals[arr[i]];
        }
    } return num;

}

module.exports = romanToDecimal;
