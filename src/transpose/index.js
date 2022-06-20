/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */

 function transpose(array) {
  const rows = array.length;
  const column = array[0].length;
  const newArr = [];
  for (let j = 0; j < column; j++) {
    newArr[j] = Array(rows);
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < column; j++) {
      newArr[j][i] = array[i][j];
    }
  }
  return newArr;
  }

module.exports = transpose;
