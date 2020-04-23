/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
  let colLen = array[0].length;
  let firstEmptyArray = [];
  for (let m = 0; m < colLen; m++) {
    let secondEmptyArray = [];
    for (let n = 0; n < array.length; n++) {
      secondEmptyArray.push(array[n][m]);
    }
    firstEmptyArray.push(secondEmptyArray);
  }
  return firstEmptyArray;
}

module.exports = transpose;
