/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    return array[0].map((_, i) => array.map(row => row[i]));
}
console.log(transpose([[9, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 7], [1, 3, 1, 5]])); 


module.exports = transpose;
