/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    const figures = {
        "I": 1,

        "V": 5,

        "X": 10,

        "L": 50,

        "C": 100,

        "D": 500,

        "M": 1000
    }

    /* Fixing some bugs in the code. Will be looking for a better approach later.
    "XX" should not be coming before "L", "C"
    "CC" should not come before "M", "D"
    Input should not contain more than 3 chracters of the figures....
    */

    if (roman.indexOf("LL") >= 0 || //The followings can't be used in Romans
        roman.indexOf("DD") >= 0 ||
        roman.indexOf("VV") >= 0 ||
        roman.indexOf("DM") >= 0 ||
        roman.indexOf("LC") >= 0 ||
        roman.indexOf("VX") >= 0) {
        return `Invalid Roman numerals`;
    }

    let ans = figures[roman[0]]; //Make the first letter the starting point
    for (let i = 1; i < roman.length; i++) {
        // figures[roman[i - 1]] is the previous 
        // figures[roman[i]] is the current 
        if (figures[roman[i - 1]] >= figures[roman[i]]) {
            ans += figures[roman[i]];
        } else {
            ans += (figures[roman[i]] - (figures[roman[i - 1]] * 2));
            // Multiply previous by 2: Subtracting the previously added and from the current value
        }
    }
    return ans
}

module.exports = romanToDecimal;