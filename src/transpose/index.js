/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    let transposed = [];
  for (let i = 0; i < arr[0].length; i++) {
    transposed.push([]);
    for (let j = 0; j < arr.length; j++) {
      transposed[i].push(arr[j][i]);
    }
  }
  return transposed;
}

module.exports = transpose;
