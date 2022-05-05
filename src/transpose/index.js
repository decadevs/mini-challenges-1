/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    const array = array[0].map((_, colIndex) =>
    array.map((row) => row[colIndex])
  );
  return array;
}

module.exports = transpose;
