/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
  const newArray = [];
  for (let r = 0; r < array.length; r++) {
    for (let c = 0; c < array[r].length; c++) {
      if (!newArray[c]) {
        newArray[c] = [];
      }
      newArray[c][r] = array[r][c];
    }
  }
  return newArray;
}

module.exports = transpose;
