/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    return array[0].map((element, index) => array.map(iElement => iElement[index]));
}

module.exports = transpose;
