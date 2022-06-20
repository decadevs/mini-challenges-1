/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
*/
function romanToDecimal(roman) {
    const romanObj = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };


    let decimal = 0;
    // let decimal = [];

    /*for (let i = 0; i < roman.length; i++) {
        // if (i < roman.length) {
        if (romanObj[roman[i]] < romanObj[roman[i + 1]]) {

            decimal += romanObj[roman[i + 1]] - romanObj[roman[i]]
            i += 1;
            console.log(decimal)
        } else {
            decimal += romanObj[roman[i]]
            console.log(decimal)
        }
        // }


    }*/

    // console.log(decimal)





    for (let i = 0; i < roman.length; i++) {
        // console.log(decimal)
        if (roman[i] == 'I' && roman[i + 1] == 'V') {
            decimal += 4;
            i += 1
        }
        else if (roman[i] == 'I' && roman[i + 1] == 'X') {
            decimal += 9;
            i += 1
        }
        else if (roman[i] == 'X' && roman[i + 1] == 'L') {
            decimal += 40;
            i += 1
        }
        else if (roman[i] == 'X' && roman[i + 1] == 'C') {
            decimal += 90;
            i += 1

        }
        else if (roman[i] == 'C' && roman[i + 1] == 'D') {
            decimal += 400;
            i += 1

        }
        else if (roman[i] == 'C' && roman[i + 1] == 'M') {
            decimal += 900;
            i += 1

        } else {
            decimal += romanObj[roman[i]];
        }
        // console.log(decimal)

    }

    // console.log(decimal);
    return decimal;



}


// romanToDecimal('XLVII')
module.exports = romanToDecimal;

