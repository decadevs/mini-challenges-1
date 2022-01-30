/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(matrix) {

 matrix.reduce(($, row) => row.map((_, i) => [...($[i] || []), row[i]]), [])

transpose([[0, 1], [2, 3],[6, 7]]) // [[0, 2, 4], [1, 3, 5]]
}

module.exports = transpose;
