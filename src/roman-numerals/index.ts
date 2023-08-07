/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman:string) {
    
    const romanNumerial: any = {'I' : 1, 'V' : 5, 'X' : 10, 'L' : 50, 'C' : 100, 'D' : 500, 'M' : 1000}
    
    let lastStrIndex: number = roman.length - 1
    let decimal: any = romanNumerial[roman[lastStrIndex]];

    // Looping from back
    for(let i = lastStrIndex; i >= 0; i--){

        let current: any = romanNumerial[roman[i]];
        let next:any = romanNumerial[roman[i - 1]];

        if( next >= current){
            decimal += next;
        }else if(next < current){
            decimal -= next;
        }
    }

    return decimal;
    
}

module.exports = romanToDecimal;
