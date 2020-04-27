/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
  
  roman = roman.toUpperCase()
    var rom = {"I":1, "V":5, "X":10, "L":50, "C":100, "D":500, "M":1000, "IV":4, "IX":9, "XL":40, "XC":90, "CD":400, "CM":900};
    var bb = 0, bc = 0, ab ="";
    ab +=roman
    for(var a=0; a<roman.length-1; a++){
        if(rom[roman.slice(a,a+2)]){
            bc += rom[roman.slice(a,a+2)];
            ab= ab.replace(roman.slice(a,a+2), "");
        }    
    }
    for(var x=0; x<ab.length; x++){
        bb += rom[ab[x]];
    }
    return bc+bb;

}

module.exports = romanToDecimal;
