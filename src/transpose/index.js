/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
  let matrix = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            // skip undefined values to preserve sparse array...
            if (array[i][j] === undefined) continue;
            // create row if it doesn't exist yet...
            if (matrix[j] === undefined) matrix[j] = [];
            // swap the x and y coordinates for the matrix...
            matrix[j][i] = array[i][j];
        }
    }
    return matrix;
}



module.exports = transpose;
