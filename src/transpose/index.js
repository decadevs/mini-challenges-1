/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {

    let rowSize = array[0].length //get the length of the array row
    let result = Array.from({length: rowSize}, () => new Array(array.length)) //create an empty transpose array
    
    for(let row = 0; row < array.length; row++){
        for(let column = 0; column < rowSize; column++){
            //Move the row value to column as you loop through
            result[column][row] = array[row][column]
        }
    }return result
}
const arr = [
    [9, 2, 3],
    [3, 4, 5],

  ];
transpose(arr)
module.exports = transpose;
