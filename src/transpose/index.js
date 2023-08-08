/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    let rows = array.length;
    let columns = array[0].length

    let transposedArray = new Array(columns);
    for (let i = 0; i < columns; i++) {
        transposedArray[i] = new Array(rows);
    }
    for (let i = 0; i < rows; i++) {
        for (let a = 0; a < columns; a++) {
            transposedArray[a][i] = array[i][a] 
        }
    };
        return transposedArray;
};


module.exports = transpose;
