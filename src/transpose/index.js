/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
  // array[0] is used inorder to iterate through columns
  return array[0].map((_, columnIndex) =>
    // append each column values in one iteration to a row
    array.map(row => row[columnIndex]));
}

module.exports = transpose;
