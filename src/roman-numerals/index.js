/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    let result = 0
    const hashMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    const arr = roman.split("");
    for(let i = 0; i < arr.length; i++){
        if(hashMap[arr[i]] < hashMap[arr[i + 1]]){
            result -= hashMap[arr[i]]
        } else {
            result += hashMap[arr[i]]
        }
    }
    return result
}
romanToDecimal("XI")

module.exports = romanToDecimal;
