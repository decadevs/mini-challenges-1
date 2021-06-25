/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
        const conversion = {"I":1,"V":5,"X":10,"L":50,"C":100,"D":500,"M":1000}//create a map of unique roman numerals and their value
        let splittedStr = roman.split("")//split the elements
        let total = 0;//variable to hold the sum of the values of the roman numerals
        let present //variable to hold a string(roman numeral)
        let presentValue // variable to hold the "value" of the roman numeral.
        let next //variable to hold the next roman numeral
        let nextValue // variable to hold the "value" of the next roman numeral.
    
        for(let i=0; i<splittedStr.length ;i++){ //loop through the array of elements
            present = splittedStr[i] // a roman numeral
            presentValue = conversion[present] //the value of the roman numeral
    
            next = splittedStr[i+1] //next roman numeral
            nextValue = conversion[next] //value of the next roman numeral
            
            if(presentValue<nextValue){  // if first value is less than secondvalue
                total = total - presentValue // subtract the firstValue from the total
            }else{
                total = total + presentValue // Add the firstValue to the total
            }
            
        }
        return total
    }
    
    console.log(romanToDecimal("xx"))

module.exports = romanToDecimal;
