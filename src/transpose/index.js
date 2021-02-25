/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {

  const rows = array.length;
  const cols = array[0].length;
  const newArray = [];

  for (let m = 0; m < cols; m++) {
    newArray[m] = Array(rows);
  }

  for (let n = 0; n < rows; n++) {
    for (let m = 0; m < cols; m++) {
      newArray[m][n] = array[n][m];
    }
  }

  return newArray;

}

module.exports = transpose;
