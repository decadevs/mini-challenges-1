/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
  const ROW_LENGTH = array[0].length;
  const COLUMN_LENGTH = array.length;
  const TRANSPOSED_ARRAY = [];
  for (let j = 0; j < ROW_LENGTH; ++j) {
    const NEW_ROW = [];
    for (let k = 0; k < COLUMN_LENGTH; ++k) {
      NEW_ROW.push(array[k].shift());
    }
    TRANSPOSED_ARRAY.push(NEW_ROW);
  }
  return TRANSPOSED_ARRAY;
}
module.exports = transpose;
