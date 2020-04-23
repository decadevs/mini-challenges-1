/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    const row = array.length;
    const col = array[0].length;
    const new_array = new Array(col).fill(0).map(() => new Array(row).fill(0));

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            new_array[j][i] = array[i][j];
        }
    }
    return new_array;
}

//transpose(array);

module.exports = transpose;
