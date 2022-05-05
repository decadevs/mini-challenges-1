/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    let [rotate] = array;
    return rotate.map((val, columns) => array.map(rotate => rotate[columns]));
}

module.exports = transpose;

