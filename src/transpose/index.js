/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
  const rows = array.length, cols = array[0].length;
  const newArray = [];
  for (let j = 0; j < cols; j++) {
    newArray[j] = Array(rows);
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      newArray[j][i] = array[i][j];
    }
  }
    return newArray;
}

module.exports = transpose;
