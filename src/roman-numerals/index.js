/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    let digits = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    // create result variable

    let result = 0;

    let input = roman.split("");
// iterate the splitted string 
    for(let i = 0; i<input.length; i++){
        let current = digits[input[i]]
        let next = digits[input[i + 1]]
        if(current === undefined){
            return result
       
        }
    }

    return "null"

}

module.exports = romanToDecimal;