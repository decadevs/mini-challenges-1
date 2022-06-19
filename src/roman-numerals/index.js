/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {

    // Create a library of roman numeral and their corresponding decimal value
    const romanValuesObj =  {'I' : 1, 'V' : 5, 'X' : 10, 'L' : 50, 'C' : 100, 'D' : 500, 'M' : 1000,}
    
    // Split the given roman to allow iteration
    let romanValue = roman.split('') // Convert input string to array
    let decimal = 0; 
    let sumArr = []  

        for (let i = 0; i < romanValue.length; i++){
            
            let currentValue = romanValue[i] // Current value of iteration in the roman array
            let nextValue = romanValue[i + 1] // Value immediately next to the current roman array

            if(romanValuesObj[currentValue] < romanValuesObj[nextValue]){ // This checks the value of current element against next element
                let value = (romanValuesObj[nextValue] - romanValuesObj[currentValue])
                sumArr.push(value) // Push the corresponding value from object library into array
                i++ 
            }else{ 
                value = romanValuesObj[currentValue] 
                sumArr.push(value)
            }
        }

    decimal = sumArr.reduce((a,b) => (a + b), 0) // Sum up all values pushed into array and store in decimal
    return decimal 

}

module.exports = romanToDecimal;
