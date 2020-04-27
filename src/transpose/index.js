/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
  let width = array[0].length;
  let height = array.length;
  let result = [];
  for (let i = 0; i < width; i++) {
    let temp = [];
    for (let j = 0; j < height; j++) {
      temp[j] = array[j][i]; // for jth move get element at index i
    }
    result.push(temp);
  }
  return result;
}

module.exports = transpose;
