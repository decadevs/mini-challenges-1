/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    var rom = ['I','V','X','L','C','D','M'];
    var num = [1,5,10,50,100,500,1000];
    var str = roman.split('');
    var arr = [];
    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < rom.length; j++) {
            if (str[i] == rom[j]) {
                var bb = rom.indexOf(rom[j]);
                arr.push(num[bb]);
            }
        }
    }

    var number = 0;
    for(k = 0; k < arr.length; k++) {
        if (arr[k] < arr[k + 1]) {
            number -= arr[k];
        }
        else {
            number += arr[k];
        }
    }
    return number;
}

module.exports = romanToDecimal;
