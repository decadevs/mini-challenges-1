/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
 function romanToDecimal(roman) {
    var arr = [];
    var sum = 0;
    var roman = roman.toUpperCase();
    for (let i = 0; i < roman.length; i++) {
        if (roman[i] == "I") {
            arr.push(1);
        }else if(roman[i]== 'V'){
            arr.push(5);
        }else if(roman[i] == 'X'){
            arr.push(10);
        }else if(roman[i] == 'L'){
            arr.push(50);
        }else if(roman[i] == 'C'){
            arr.push(100);
        }else if(roman[i] == 'D'){
            arr.push(500);
        }else if(roman[i] == 'M'){
            arr.push(1000);
        }
        
    }
    
    for (let z = 0; z < arr.length; z++) {
        if (arr[z] == 1 && ((arr[z+1] == 5)||(arr[z+1] == 10))) {
            sum += Number(arr[z+1]) - Number(arr[z]);
            arr[z+1] = 0;
            
        }else if ((arr[z] == 10 && ((arr[z+1] == 50)||arr[z+1] == 100))) {
            sum += Number(arr[z+1]) - Number(arr[z]);
            arr[z+1] = 0;
        }else if ((arr[z] == 100 && ((arr[z+1] == 500)||arr[z+1] == 1000))) {
            sum += Number(arr[z+1]) - Number(arr[z]);
            arr[z+1] = 0;
        }else{
            sum +=  Number(arr[z]);
        }
        
        
        
    }
    return sum;
}

module.exports = romanToDecimal;

//console.log(romanToDecimal('MMCDXLVIII'))
