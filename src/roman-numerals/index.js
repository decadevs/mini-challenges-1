/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    // figure out what each roman numeral is
    const romanNumerals = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };
    // turn romanNumerals to array and add the value of each roman numeral to total value of roman
    let romanSplit = roman.split('');
    // create a counter to store the total value of roman
    let totalValue = 0;
    for (let index = 0; index < romanSplit.length; index++) {
        let currentNumeral = romanSplit[index];
        let nextNumeral = romanSplit[index + 1];
        //if there is just a single numeral
        if (romanSplit.length === 1) {
            totalValue = romanNumerals[currentNumeral];
            break;
        }
        if (!nextNumeral) {
            totalValue += romanNumerals[currentNumeral];
            break;
        }
        // then, if roman numeral >= than the numeral that follows it, add to the total
        if (romanNumerals[currentNumeral] >= romanNumerals[nextNumeral]) {
            totalValue += romanNumerals[currentNumeral];
            // else if it is <  than the numeral that follows it, subtract it from the next numeral, 
        } else if (romanNumerals[currentNumeral] < romanNumerals[nextNumeral]) {
            //and then add that result to the total.
            totalValue += (romanNumerals[nextNumeral] - romanNumerals[currentNumeral]);
            index++;
        }
    }
    return totalValue;

};


module.exports = romanToDecimal;