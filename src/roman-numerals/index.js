/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
/**
 * MY ALGORITHM
 * 1. create an obj containing the key-value pairs of the roman numerals
 * 2. split the roman numeral to form an array of individual roman symbol
 * 3. loop through the array and compare
 *      1. if the current element is greater than or equal to the next, add the num equivalent to the counter
 *      2. if the current is less than the next, substract the num equivalent to the counter
 *      3. if there is no next value, add the current value to the counter
 * 4. return the counter
 */
function romanToDecimal(roman) {
    const map = {"M":1000, "D":500, "C":100, "L":50, "X":10, "V":5, "I":1}
    let arr = roman.split('')
    let num = 0
    let current, next
    for(let i = 0; i <arr.length; i++){
        current = arr[i]
        next = arr[i+1]
        if(map[current] >= map[next]){
            num += map[current]
        }else if(map[current] < map[next]){
            num -= map[current]
        }else if(!map[next]){
            num += map[current]
        }
    }
    return num
}

module.exports = romanToDecimal;
 console.log(romanToDecimal("IX"))