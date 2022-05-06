/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {

    // replace all lessers 
    let r = roman.toString();
    r = r.replace(/CM/g, "+900+");
    r = r.replace(/CD/g, "+400+");
    r = r.replace(/XC/g, "+90+");
    r = r.replace(/XL/g, "+40+");
    r = r.replace(/IX/g, "+9+");
    r = r.replace(/IV/g, "+4+");

    // replacing regulars
    r = r.replace(/M/g, "+1000+");
    r = r.replace(/D/g, "+500+");
    r = r.replace(/C/g, "+100+");
    r = r.replace(/L/g, "+50+");
    r = r.replace(/X/g, "+10+");
    r = r.replace(/V/g, "+5+");
    r = r.replace(/I/g, "+1+");

    //console.log(r);
    // replace double +. starting +. ending +
    r = r.replace(/\+\+/g, "+").replace(/^\+/, '').replace(/\+$/, '');
    
    const arr = r.split("+"); let decimal = 0;
    for(let i=0; i < arr.length; i++){
        decimal += Number(arr[i]);
    }
    return decimal;

    
}
console.log(romanToDecimal("XCVIII"));

function keep_this(){
    let roman = new Map({
        "M": 1000,
        "D": 500,
        "C": 100,
        "L": 50,
        "X": 10,
        "V": 5,
        "I": 1 
    });

    let roman_lessers = new Map({
        "CM": 900,
        "CD": 400,
        "XC": 90,
        "XL": 40,
        "IX": 9,
        "IV": 4 
    });

}


module.exports = romanToDecimal;
