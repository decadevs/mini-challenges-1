/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    //array of special cases
    const objOfRomNums= {"I":1, "V":5, "X":10, "L":50, "C":100, "D":500, "M":1000}
    let arrayOfnums= [];
    
    //search for special cases and send their values into a new array, delete the special cases
    //TO DO replace with switch statements
    if(roman.includes("IV")){
        roman= roman.replace("IV","");
        arrayOfnums.push(4);
    }
    if(roman.includes("IX")){
        roman= roman.replace("IX","");
        arrayOfnums.push(9);
    }
    if(roman.includes("XL")){
        roman= roman.replace("XL","");
        arrayOfnums.push(40);
    }
    if(roman.includes("XC")){
        roman= roman.replace("XC","");
        arrayOfnums.push(90);
    }
    if(roman.includes("CD")){
        roman= roman.replace("CD","");
        arrayOfnums.push(400);
    }
    if(roman.includes("CM")){
        roman= roman.replace("CM","");
        arrayOfnums.push(900);
    }

    let lengthOfroman= roman.length;
    for(let i=0; i<lengthOfroman; i++){
        arrayOfnums.push(objOfRomNums[roman[i]])
    }
    //sum the arrays
    return arrayOfnums.reduce((a,b)=> a+b,0);
    // return arrayOfnums


}

module.exports = romanToDecimal;
