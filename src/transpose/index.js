/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    let transposedArr = [];
    for (let i=0; i < array[0].length; i++){
    transposedArr[i] = [];
        for (let j=0; j < array.length; j++){
            transposedArr[i][j] = array[j][i]
        }
    }
return transposedArr     
}

module.exports = transpose;
