/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    const newVariable ={
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    }
     let romFull = 0;
    for(let i = 0; i < roman.length; i++){
        let currentRom = roman[i];
        let nextRom = roman[i + 1];
        if(newVariable[nextRom] > newVariable[currentRom]){
            romFull += newVariable[nextRom] - newVariable[currentRom]  
            i++;
        }else{
            romFull += newVariable[currentRom]
        }

    }
    return romFull
}

module.exports = romanToDecimal;
