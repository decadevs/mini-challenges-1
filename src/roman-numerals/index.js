/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    const numerals = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    const romanToArr = roman.split("");
    let check = 0;

    for (let i = 0; i < romanToArr.length; i++) {
        if (romanToArr.length == 1) {
        check += Number(numerals[romanToArr[i]]);
        } else if (numerals[romanToArr[i]] > numerals[romanToArr[i + 1]]) {
        check += Number(numerals[romanToArr[i]]);
        console.log(check);
        } else if (numerals[romanToArr[i]] === numerals[romanToArr[i + 1]]) {
        check += Number(numerals[romanToArr[i]]);
        console.log(check);
        } else if (numerals[romanToArr[i]] < numerals[romanToArr[i + 1]]) {
        check += Number(numerals[romanToArr[i + 1]] - numerals[romanToArr[i]]);
        i += 1;
        console.log(check);
        } else if (romanToArr[i] == romanToArr[romanToArr.length - 1]) {
        check += Number(numerals[romanToArr[i]]);
        }
    }
    return check;
};

module.exports = romanToDecimal;
