/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (!result[j]) {
        result[j] = [];
      }
      result[j][i] = array[i][j];
    }
  }
  return result;
}

module.exports = transpose;
