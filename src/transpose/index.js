/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    let row = array.length;
    let col = array[0].length;
    let result = []
    for(let i = 0; i < col; i++){
        result[i] = [];
       for(let j = 0; j < row; j++) {
           result[i][j] = array[j][i];
       }
    }
    return result;
}

module.exports = transpose;
