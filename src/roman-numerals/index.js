/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman){
    const romanNumerals = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    let count = 0;
    let i = 0;
    
    while(i < roman.length){
    let first = roman[i];
    let next = roman[i + 1];
    //checking if it has gotten to V, X, L etc
    if(romanNumerals[next] > romanNumerals[first]){
        count = count + romanNumerals[next] - romanNumerals[first];
        i += 2;
    }else{
        //if not it should continue the count
        count += romanNumerals[first];
        i++;
    }
    }
    return count;
    }


    console.log(romanToDecimal("CDXL"));

    module.exports = romanToDecimal;
