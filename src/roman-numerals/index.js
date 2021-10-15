/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    let dictionary = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    let sum = 0
    for(let i = 0; i < roman.length; i++){
        let frst = roman[i]
        let scnd = roman[i + 1]
        let frstNum = dictionary[frst]
        let scndNum = dictionary[scnd]
        if(frstNum < scndNum){
           sum += scndNum - frstNum
           i++;
        }
        else {
            sum += frstNum
        }
        }
        return sum
    }



module.exports = romanToDecimal;

 console.log(romanToDecimal("IV"));