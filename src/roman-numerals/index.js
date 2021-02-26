/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    roman;
    var lookup =  {"M": 1000, "D": 500, "C": 100, "L": 50, "X": 10, "V":5, "I": 1}
    let answer = 0;
    let next;
    let nextValue;
    let current;
    let currentValue;
    var array =  roman.split('');
    for(let i =0; i < array.length; i++){
        current= array[i];
        currentValue = lookup[current];

        next = array[i+1];
        nextValue = lookup[next];

        if(currentValue < nextValue ){
            answer -= currentValue;
        }else if( currentValue >= nextValue){
            answer += currentValue;
        }else if( currentValue && !nextValue){
            answer += currentValue;
        }
    }
    return answer;
}

module.exports = romanToDecimal;
