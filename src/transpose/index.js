/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
  let result = [];

  for (let i = 0; i < array[0].length; i++) {
    result.push([]);

    for (let j = 0; j < array.length; j++) {
      result[i].push(array[j][i]);
    }
  }
  return result;
}

module.exports = transpose;
