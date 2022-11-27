/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
 function romanToDecimal(roman) {
    let upperRoman = roman.toUpperCase()
    //let decimal = 0;
    let array = []

    const romanObject = {
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000,
    };

    for (let i = 0; i < upperRoman.length; i++) {
        const first = romanObject[upperRoman[i]];
        const latter = romanObject[upperRoman[i + 1]];
        
        if (latter < first) {
            
            array.push(first)
        } else if (latter > first) {
            array.push(latter - first)
            i++
        } else {array.push(first)}

       
       
    }
    return array.reduce((a, b) => a + b)
    
}

console.log(romanToDecimal(`iv`))

module.exports = romanToDecimal;
