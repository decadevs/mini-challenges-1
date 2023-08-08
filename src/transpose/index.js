/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    let rows = array.length;
    let cols = array[0].length;

    let transposedMatrix = [];
    for(let c = 0; c < cols; c++) {
        transposedMatrix[c] = Array(rows);
    }
    for(let r = 0; r < rows; r++) {
        for(let c = 0; c < cols; c++) {
            transposedMatrix[c][r] = array[r][c];
        }
    }
    return transposedMatrix;
}

module.exports = transpose;
