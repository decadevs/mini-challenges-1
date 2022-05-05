/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    let newVariable ={
        M : 1000,
        D : 500,
        C : 100,
        L : 50,
        X : 10,
        V : 5,
        I : 1
    }, romAlph = 0;

    for(let i = 0; i < roman.length; i++){
        let currentRom = roman[i];
        let nextRom = roman[i + 1];

        if(newVariable[nextRom] > newVariable[currentRom]){
            romAlph += newVariable[nextRom] - newVariable[currentRom]
            i++
        }else{
            romAlph += newVariable[currentRom]
        }
    }
    return romAlph
}

module.exports = romanToDecimal;
