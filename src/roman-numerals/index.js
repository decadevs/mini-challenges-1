/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    let romanArr = roman.split("");
    let numerals = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
    let romanVal = [1000, 500, 100, 50, 10, 5, 1];
    let valArr = [];

    for (let i = 0; i < romanArr.length; i++){
        for (let j = 0; j < numerals.length; j++){
            if (romanArr[i] === numerals[j]){
                valArr.push(romanVal[j]);
            }
        }
    }
    let value = solveArr(valArr);
    return value;

}

function solveArr(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        if (i == array.length-1){
            sum += array[i];
        }
        else if (array[i] > array[i+1]){
            sum += array[i];
        }
        else if (array[i] == array[i+1]){
            sum += array[i];
        }
        else{
            sum += (array[i+1] - array[i]);
            i++;
        }
    }
    return sum;
}

module.exports = romanToDecimal;
