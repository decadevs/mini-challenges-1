/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */

function romanToDecimal(roman) {
    // declare a "decimal" variable you want to see at the end
    let decimal = 0
    //declare all possible values of the roman numerals(as a string mostly because they are alphabets)
    let romanNumerals = "IVXLCDM"
    //declare an array of the corresponding values in decimal of the roman numerals(what they stand for in numbers)
    let correspondingDecimal =[1, 5, 10, 50, 100, 500, 1000]

     //create a for loop to iterare through the given roman numerals,the correspondingnumber values(the indexes they both represent) and the addition of each numeral to form a larger numeral
for (let value = 0; value < roman.length; value++){

let romanNumeralsIndex = romanNumerals.indexOf(roman[value])
 let correspondingDecimalNumber = correspondingDecimal[romanNumeralsIndex]
 let romanNumeralsIndex1 = romanNumerals.indexOf(roman[value +1])

//check if the value of the inputted roman numerals string are included in the roman numerals
 if (romanNumerals.includes(roman[value])){
    decimal += correspondingDecimalNumber
    //check if the previous roman number is less than the immediate following roman numeral 
if (romanNumeralsIndex < romanNumeralsIndex1){
    decimal -= correspondingDecimalNumber * 2
}
 }

}
return decimal 
}

console.log(romanToDecimal("MDXC"));
console.log(romanToDecimal("MMCDXLVIII"));
console.log(romanToDecimal("MMMDCCXXIV"));
console.log(romanToDecimal("MMMCMXCIX"));




module.exports = romanToDecimal;
