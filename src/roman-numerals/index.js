/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
const romanToDecimal = roman => {
    roman = roman.split('');
    const equivalentVal = [];
    // create a hash table.
    const decimalVal = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };
    let elementOfEquiv = 0;
    // use for loop to get the value
    for (let i = 0; i<roman.length; ++i) {
        if(decimalVal[roman[i]] >= decimalVal[roman[i + 1]] || i === roman.length -1) {
            elementOfEquiv += decimalVal[roman[i]]
            equivalentVal.push(elementOfEquiv);
            elementOfEquiv = 0;
        }else {
            elementOfEquiv -= decimalVal[roman[i]];
            equivalentVal.push(elementOfEquiv);
            elementOfEquiv = 0;
        }
    }
    return equivalentVal.reduce((a, c) => a+c)
    }

module.exports = romanToDecimal;
