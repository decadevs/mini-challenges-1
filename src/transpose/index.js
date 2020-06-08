/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */

/*
- initialize a variable for the outer loop i.e the columns
- initialize a variable for the inner loop i.e. the rows
- initialize a variable transposedArray and make it an empty array
- Loop through the items in the arrays
- insert a new row into the transposedArray
- save the transposed data into the transposedArray
- return the transposedArray

*/
function transpose(array) {
    let row = array.length;
    let column = array[0].length
    let transposedArray = [];

    for (let i = 0; i < column; i++) {
        transposedArray[i] = [];
        for (let j = 0; j < row; j++) {
            transposedArray[i][j] = array[j][i]
        }
    }
    return transposedArray;
}



module.exports = transpose;