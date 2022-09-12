/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
        return array[0].map((col, c) => array.map((row, r) => array[r][c]));
    
}
console.log(transpose([
        [1, 2],
        [3, 4]]));
module.exports = transpose;
