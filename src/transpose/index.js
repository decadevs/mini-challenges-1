/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    const rows = array.length, cols =array[0].length;
    const grid = [];
    for (let j = 0; j < cols; j++) {
        grid[j] = Array(rows);
    }
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            grid[j][i] = array[i][j];
        }
    }
    return grid;
}
    console.log(transpose([[1, 2, 3],[3, 4, 5],]))


module.exports = transpose;
